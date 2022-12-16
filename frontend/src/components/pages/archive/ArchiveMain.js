import React,{ useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

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
} from "@mui/material";

const ArchiveMain = () => {
  const [open,setOpen] = useState(false);


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
        <Card sx={{ margin: "15px" }}>
          <CardMedia
            component="img"
            height="200"
            image={`${process.env.PUBLIC_URL}/img/page/no-image.png`}
            alt="サムネイル画像"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: "nicokaku" }}>
              スターバックスコーヒー 松山市駅前店
            </Typography>
            <Typography variant="body2">
              さすがのスターバックス！！いつも清潔に保たれています。さすがのスターバックス！！いつも清潔に保たれています。
            </Typography>
          </CardContent>
          <CardActions sx={{ justifyContent: "end" }}>
            <Button size="small" onClick={() => handleClickOpenModal({id: 1234})}>
              編集
            </Button>
            <Button size="small" onClick={() => handleClickDeletePost(1234)}>
              削除
            </Button>
          </CardActions>
        </Card>
        
        <Card sx={{ margin: "15px" }}>
          <CardMedia
            component="img"
            height="200"
            image={`${process.env.PUBLIC_URL}/img/page/no-image.png`}
            alt="サムネイル画像"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: "nicokaku" }}>
              スターバックスコーヒー 松山市駅前店
            </Typography>
            <Typography variant="body2">
              さすがのスターバックス！！いつも清潔に保たれています。さすがのスターバックス！！いつも清潔に保たれています。
            </Typography>
          </CardContent>
          <CardActions sx={{ justifyContent: "end" }}>
            <Button size="small" onClick={() => handleClickOpenModal({id: 1234})}>
              編集
            </Button>
            <Button size="small" onClick={() => handleClickDeletePost(1234)}>
              削除
            </Button>
          </CardActions>
        </Card>
      </main>
      <AdminFooter />
      <EditModal open={open} setOpen={setOpen}></EditModal>
    </>
  );
};

export default ArchiveMain;
