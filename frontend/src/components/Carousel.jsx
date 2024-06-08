// Carousel.jsx

import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import ContainerBox from "../utils/ContainerBox";
import { Typography } from "@mui/material";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import ChevronLeftOutlinedIcon from "@mui/icons-material/ChevronLeftOutlined";
import { Navigation } from "swiper/modules";
import { v4 as uuid } from "uuid";
import { useForm } from "react-hook-form";
import {
  Button,
  TextField,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControlLabel,
} from "@mui/material";

import "../styles/carousel.css";
import { useState } from "react";

const Carousel = ({
  carouselId,
  carouselItems = [],
  carouselTitle,
  buttonText,
  addFood,
}) => {
  const [open, setOpen] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const newFood = {
      Id: uuid(),
      Name: data.Name,
      Price: data.Price,
      ImageUrl: data.ImageUrl,
      IsPopular: data.IsPopular,
      IsRecommended: data.IsRecommended,
    };

    addFood(newFood);

    handleClose();
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    reset();
    setOpen(false);
  };

  return (
    <div>
      <div className="flex justify-between items-center">
        <Typography variant="h6"> {carouselTitle || "Featured"} </Typography>
        <div className="right relative flex items-center justify-between">
          <button
            onClick={handleClickOpen}
            className="text-buttonIconOrange hidden sm:block"
          >
            {buttonText || "AddMore"}
          </button>
          <div className="swiper-buttons relative w-ful min-w-20 flex justify-center gap-6">
            <button
              id={`${carouselId}-prev`}
              className={`${carouselId}-prev swiper-button-prev hover:cursor-pointer hidden sm:block text-3xl`}
            >
              <ChevronLeftOutlinedIcon
                fontSize="large"
                sx={{ color: "#334558" }}
              />
            </button>

            <button
              id={`${carouselId}-next`}
              className={`${carouselId}-next swiper-button-next hover:cursor-pointer hidden sm:block text-3xl`}
            >
              <ChevronRightOutlinedIcon
                fontSize="large"
                sx={{ color: "#334558" }}
              />
            </button>
          </div>
        </div>
      </div>
      <ContainerBox styles={"mt-4"}>
        <Swiper
          id={carouselId}
          slidesPerView={5}
          spaceBetween={15}
          modules={[Navigation]}
          className={`${carouselId}Swiper md:h-80 h-full`}
          navigation={{
            nextEl: `#${carouselId}-next`,
            prevEl: `#${carouselId}-prev`,
          }}
          breakpoints={{
            // when window width is >= 320px
            320: {
              slidesPerView: 2.5,
              spaceBetween: 20,
            },
            // when window width is >= 1024px
            1024: {
              slidesPerView: 5,
              spaceBetween: 15,
            },
          }}
        >
          {carouselItems.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="w-full md:h-full relative rounded-2xl overflow-hidden flex flex-col items-center">
                <img
                  className="max-w-full h-52 max-h-[265px] md:h-full object-contain rounded-2xl duration-700 transform scale-100 transition-transform ease-in-out hover:scale-150"
                  src={item.ImageUrl}
                  alt=""
                />
                <p className="text-base mt-3">{item.Name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </ContainerBox>
      <div
        className={`addFoodModal justify-center items-center h-screen w-full ${
          open ? "flex absolute top-0 left-0" : "hidden"
        }`}
      >
        <Dialog
          className="addFoodModal w-full min-w-80"
          open={open}
          onClose={handleClose}
        >
          <form className="min-w-80" onSubmit={handleSubmit(onSubmit)}>
            <DialogTitle>Add Item</DialogTitle>
            <DialogContent className="flex flex-col space-y-4">
              <TextField
                {...register("Name", { required: "Name is required" })}
                label="Name"
                fullWidth
                error={errors.Name ? true : false}
                helperText={errors.Name && errors.Name.message}
              />
              <TextField
                {...register("Price", { required: "Price is required" })}
                label="Price"
                type="number"
                fullWidth
                error={errors.Price ? true : false}
                helperText={errors.Price && errors.Price.message}
              />
              <TextField
                {...register("ImageUrl", { required: "Image URL is required" })}
                label="Image URL"
                fullWidth
                error={errors.ImageUrl ? true : false}
                helperText={errors.ImageUrl && errors.ImageUrl.message}
              />
              <FormControlLabel
                control={<Checkbox {...register("IsPopular")} />}
                label="Is Popular"
              />
              <FormControlLabel
                control={<Checkbox {...register("IsRecommended")} />}
                label="Is Recommended"
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="secondary">
                Cancel
              </Button>
              <Button type="submit" color="primary">
                Submit
              </Button>
            </DialogActions>
          </form>
        </Dialog>
      </div>
    </div>
  );
};

export default Carousel;

Carousel.propTypes = {
  carouselId: PropTypes.string,
  carouselItems: PropTypes.array.isRequired,
  carouselTitle: PropTypes.string,
  buttonText: PropTypes.string,
  addFood: PropTypes.func.isRequired,
};

// import PropTypes from "prop-types";
// import { Swiper, SwiperSlide } from "swiper/react";
// import ContainerBox from "../utils/ContainerBox";
// import { Typography } from "@mui/material";
// import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
// import ChevronLeftOutlinedIcon from "@mui/icons-material/ChevronLeftOutlined";
// import { Navigation } from "swiper/modules";
// import { v4 as uuid } from "uuid";
// import { useForm } from "react-hook-form";
// import {
//   Button,
//   TextField,
//   Checkbox,
//   Dialog,
//   DialogActions,
//   DialogContent,
//   DialogTitle,
//   FormControlLabel,
// } from "@mui/material";

// import "../styles/carousel.css";
// import { useState } from "react";

// const Carousel = ({
//   id,
//   carouselItems = [],
//   carouselTitle,
//   buttonText,
//   addFood,
// }) => {
//   const [open, setOpen] = useState(false);

//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = (data) => {
//     const newFood = {
//       Id: uuid(),
//       Name: data.Name,
//       Price: data.Price,
//       ImageUrl: data.ImageUrl,
//       IsPopular: data.IsPopular,
//       IsRecommended: data.IsRecommended,
//     };

//     // console.log(newFood);

//     addFood(newFood);

//     handleClose();
//   };

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     reset();
//     setOpen(false);
//   };

//   return (
//     <div>
//       <div className="flex justify-between items-center">
//         <Typography variant="h6"> {carouselTitle || "Featured"} </Typography>
//         <div className="right relative flex items-center justify-between">
//           <button
//             onClick={handleClickOpen}
//             className="text-buttonIconOrange hidden sm:block"
//           >
//             {buttonText || "AddMore"}
//           </button>
//           <div className="swiper-buttons relative w-ful min-w-20 flex justify-center gap-6">
//             <button className="swiper-button-prev hover:cursor-pointer hidden sm:block text-3xl">
//               <ChevronLeftOutlinedIcon
//                 fontSize="large"
//                 sx={{ color: "#334558" }}
//               />
//             </button>

//             <button className="swiper-button-next hover:cursor-pointer hidden sm:block text-3xl">
//               <ChevronRightOutlinedIcon
//                 fontSize="large"
//                 sx={{ color: "#334558" }}
//               />
//             </button>
//           </div>
//         </div>
//       </div>
//       <ContainerBox styles={"mt-4"}>
//         <Swiper
//           id={id}
//           slidesPerView={5}
//           spaceBetween={15}
//           modules={[Navigation]}
//           className="popularItemsSwiper h-80"
//           navigation={{
//             nextEl: ".swiper-button-next",
//             prevEl: ".swiper-button-prev",
//           }}
//         >
//           {carouselItems.map((item, index) => (
//             <SwiperSlide key={index}>
//               <div className="w-full h-full relative rounded-2xl overflow-hidden flex flex-col items-center">
//                 <img
//                   className="max-w-full max-h-[265px] h-full object-cover rounded-2xl"
//                   src={item.ImageUrl}
//                   alt=""
//                 />

//                 <p className="text-base mt-3">{item.Name}</p>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </ContainerBox>
//       <div
//         className={`addFoodModal justify-center items-center h-screen w-full ${
//           open ? "flex absolute top-0 left-0" : "hidden"
//         }`}
//       >
//         <Dialog
//           className="addFoodModal w-full min-w-80"
//           open={open}
//           onClose={handleClose}
//         >
//           <form className="min-w-80" onSubmit={handleSubmit(onSubmit)}>
//             <DialogTitle>Add Item</DialogTitle>
//             <DialogContent className="flex flex-col space-y-4">
//               <TextField
//                 {...register("Name", { required: "Name is required" })}
//                 label="Name"
//                 fullWidth
//                 error={errors.Name ? true : false}
//                 helperText={errors.Name && errors.Name.message}
//               />
//               <TextField
//                 {...register("Price", { required: "Price is required" })}
//                 label="Price"
//                 type="number"
//                 fullWidth
//                 error={errors.Price ? true : false}
//                 helperText={errors.Price && errors.Price.message}
//               />
//               <TextField
//                 {...register("ImageUrl", { required: "Image URL is required" })}
//                 label="Image URL"
//                 fullWidth
//                 error={errors.ImageUrl ? true : false}
//                 helperText={errors.ImageUrl && errors.ImageUrl.message}
//               />
//               <FormControlLabel
//                 control={<Checkbox {...register("IsPopular")} />}
//                 label="Is Popular"
//               />
//               <FormControlLabel
//                 control={<Checkbox {...register("IsRecommended")} />}
//                 label="Is Recommended"
//               />
//             </DialogContent>
//             <DialogActions>
//               <Button onClick={handleClose} color="secondary">
//                 Cancel
//               </Button>
//               <Button type="submit" color="primary">
//                 Submit
//               </Button>
//             </DialogActions>
//           </form>
//         </Dialog>
//       </div>
//     </div>
//   );
// };

// export default Carousel;

// Carousel.propTypes = {
//   id: PropTypes.string,
//   carouselItems: PropTypes.array.isRequired,
//   carouselTitle: PropTypes.string,
//   buttonText: PropTypes.string,
//   addFood: PropTypes.func.isRequired,
// };
