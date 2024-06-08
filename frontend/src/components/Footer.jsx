import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import ContainerBox from "../utils/ContainerBox";
import { ArrowRightAlt, Google, Instagram, Twitter } from "@mui/icons-material";
import FooterImage from "../assets/Image2.png";

const Footer = () => {
  return (
    <div className="footer-section mt-20 md:mt-52 bg-primaryOrange">
      <ContainerBox>
        <div className="grid md:grid-cols-3 gap-4 pb-6">
          <div className="content-left md:col-span-2 py-16 px-4 md:px-0 md:pl-[105px]">
            <Box sx={{ paddingBottom: 10 }}>
              <TextField
                placeholder="Enter your email"
                className="w-full max-w-xl bg-bgPrimary rounded-[20px] block"
                sx={{
                  "& .MuiOutlinedInput-notchedOutline": {
                    border: "none",
                  },
                  "& .MuiOutlinedInput-root": {
                    paddingRight: "12px",
                    paddingLeft: 2,
                  },
                  paddingRight: 0,
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Button
                        variant="contained"
                        sx={{
                          color: "white",
                          backgroundColor: "#FC6011",
                          borderRadius: "14px",
                          fontSize: 16,
                          paddingRight: 4,
                          paddingLeft: 6,
                          paddingTop: 1,
                          paddingBottom: 1,
                          textTransform: "capitalize",
                          fontWeight: "normal",
                          "& .MuiButton-endIcon": {
                            fontSize: "30px",
                          },
                        }}
                        endIcon={<ArrowRightAlt />}
                      >
                        Subscribe
                      </Button>
                    </InputAdornment>
                  ),
                }}
              />
            </Box>

            <div className="left-side my-3 ml-2.5">
              <h2 className="text-4xl font-bold text-black font-ubuntu">
                pti<span className="text-red-500">.</span>
              </h2>
              <div className="w-full flex justify-between items-start px-2 ">
                <p className="font-poppins text-black font-medium py-5 tracking-tight">
                  Copyright©Tripp. All Rights Reserved
                </p>
                <div className="icons mt-1 flex gap-3">
                  <IconButton
                    aria-label="google"
                    sx={{
                      color: "#FC6011",
                      padding: 1,
                      backgroundColor: "white",
                      borderRadius: 100,
                    }}
                  >
                    <Google fontSize="small" />
                  </IconButton>
                  <IconButton
                    aria-label="google"
                    sx={{
                      color: "#FC6011",
                      padding: 1,
                      backgroundColor: "white",
                      borderRadius: 100,
                    }}
                  >
                    <Twitter fontSize="small" />
                  </IconButton>
                  <IconButton
                    aria-label="google"
                    sx={{
                      color: "#FC6011",
                      padding: 1,
                      backgroundColor: "white",
                      borderRadius: 100,
                    }}
                  >
                    <Instagram fontSize="small" />
                  </IconButton>
                </div>
              </div>
            </div>
          </div>
          <div className="image-right">
            <img
              src={FooterImage}
              className="w-full md:w-11/12 h-full md:h-4/5 md:ml-10 mt-1"
              alt="footer image"
            />
          </div>
        </div>
      </ContainerBox>
    </div>
  );
};

export default Footer;
