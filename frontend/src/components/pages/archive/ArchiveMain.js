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
  const [toiletItemDetail,setToiletItemDetail] = useState({});
  const [images, setImages] = useState([]);
  const [open,setOpen] = useState(false);
  const [alert,setAlert] = useState(false);
  const ErrorSwal = withReactContent(Swal);

  const url = "/api/archive";

  useEffect(()=>{
    (async ()=>{
      try{
        const res = await axios.get(url);
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

  const handleClickDeletePost = (toiletId) => {
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

      if (!res.isConfirmed) {
        return ConfirmSwal.fire({ title: "キャンセルしました" });
      }

      const url = `/api/delete/id?toilet_id=${toiletId}`;

      (async ()=> {
        try{
          const res = await axios.get(url);

          if(!res.data){
            return ErrorSwal.fire({
              title: "削除に失敗しました",
              icon: "error",
            });
          }

          setToiletList(res.data.toiletInfo);

          return ConfirmSwal.fire({
            title: `削除完了`,
            icon: "success",
          });

        }catch (e){
          return e;
        }
      })();
    });
  };

  const handleClickOpenModal = async (toiletId) => {

    toiletList.map(toiletItem => {
      if(toiletId == toiletItem.toilet_id ){
        setToiletItemDetail(toiletItem);
        setImages(toiletItem.toilet_image);
      }
    });
    
    setOpen(true);
    setTimeout(()=>{document.getElementById("toilet_name").focus();},1)
  }

  return (
    <>
      <Header page="archive">投稿一覧</Header>
      <main className="main archive__main">
        {alert && <Alert severity="success" sx={{ position: "absolute", top: "-75px", left: "0", right: "0", maxWidth: "450px", margin: "auto 15px" }} > { alert } </Alert>}
        
        {toiletList.length == 0
          ? <p style={{ textAlign: "center" }}>投稿されたトイレはありません。</p>
          : toiletList.map((toiletItem)=>{
          return(
            <Card key={toiletItem.toilet_id} sx={{ margin: "15px" }}>
              <CardMedia
                component="img"
                height="200"
                image={
                  toiletItem.toilet_image.length > 0 ?
                  toiletItem.toilet_image[0].image_url :
                  `${process.env.PUBLIC_URL}/img/page/no-image.png`
                }
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
                <Button size="small" onClick={() => handleClickOpenModal(toiletItem.toilet_id)}>
                  編集
                </Button>
                <Button size="small" onClick={() => handleClickDeletePost(toiletItem.toilet_id)}>
                  削除
                </Button>
              </CardActions>
            </Card>
          )
        }) }
      </main>
      <EditModal 
        open={open} 
        setOpen={setOpen} 
        toiletItemDetail={toiletItemDetail} 
        setToiletItemDetail={setToiletItemDetail}
        images={images} 
        setImages={setImages}
        setAlert={setAlert}
        ></EditModal>
      <AdminFooter />
    </>
  );
};

export default ArchiveMain;
