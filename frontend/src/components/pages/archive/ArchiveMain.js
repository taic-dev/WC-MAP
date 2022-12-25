import React,{ useEffect, useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import axios from "axios";

// components
import Header from "../common/Header";
import AdminFooter from "../common/AdminFooter";
import EditModal from "./EditModal";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Alert,
} from "@mui/material";

const ArchiveMain = () => {
  const [toiletList,setToiletList] = useState([]);
  const [open,setOpen] = useState(false);
  const [alert,setAlert] = useState(false);

  const url = "/api/archive";

  useEffect(()=>{
    (async ()=>{
      try{
        const res = await axios.get(url);
        console.log(res.data.toiletInfo);
        setToiletList(res.data.toiletInfo);
        if(res.data.session.alert.success){
          setAlert(res.data.session.alert.success);
        }
      }catch (e){
        return e;
      }
    })();
  },[]);

  const ConfirmSwal = withReactContent(Swal);

  const handleClickDeletePost = (id) => {
    ConfirmSwal.fire({
      title: "削除しますか？",
      icon: "warning",
      text: "削除すると復元できません。",
      allowOutsideClick: false,
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "削除する",
    }).then((res) => {
      console.log(res);
      if (!res.isConfirmed)
        return ConfirmSwal.fire({ title: "キャンセルしました" });

      return ConfirmSwal.fire({
        title: `${id}削除完了`,
        icon: "success",
      });
    });
  };

  const handleClickOpenModal = (data) => {
    setOpen(true);
    console.log(data.id);
  }

  return (
    <>
      <Header page="archive">投稿一覧</Header>
      <main className="main archive__main">
        {alert && <Alert severity="success" sx={{ position: "absolute", top: "-75px", left: "0", right: "0", maxWidth: "450px", margin: "auto 15px" }} > { alert } </Alert>}
        
        {toiletList && toiletList.map((toiletItem)=>{
          return(
            <Card key={toiletItem.toilet_id} sx={{ margin: "15px" }}>
              <CardMedia
                component="img"
                height="200"
                image={`http://localhost:8000/storage/${toiletItem.toilet_image[0].image_url}`}
                alt="サムネイル画像"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: "nicokaku" }}>
                  {toiletItem.toilet_name}
                </Typography>
                <Typography variant="body2">
                  {toiletItem.description}
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: "end" }}>
                <Button size="small" onClick={() => handleClickOpenModal({id: toiletItem.toilet_id})}>
                  編集
                </Button>
                <Button size="small" onClick={() => handleClickDeletePost({id: toiletItem.toilet_id})}>
                  削除
                </Button>
              </CardActions>
            </Card>
          )
        }) }
      </main>
      <AdminFooter />
      <EditModal open={open} setOpen={setOpen}></EditModal>
    </>
  );
};

export default ArchiveMain;
