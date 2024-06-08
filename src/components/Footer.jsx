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
    <div className="footer-section mt-28 md:mt-52 bg-primaryOrange">
      <ContainerBox>
        <div className="grid md:grid-cols-3 gap-4 pb-6">
          <div className="content-left md:col-span-2 py-16 px-4 md:px-0 md:pl-[105px]">
            <Box sx={{ paddingBottom: { xs: "30px", md: 10 } }}>
              <TextField
                placeholder="Enter your email"
                className="w-full max-w-xl bg-bgPrimary rounded-xl md:rounded-[20px] block"
                sx={{
                  "& .MuiOutlinedInput-notchedOutline": {
                    border: "none",
                  },
                  "& .MuiOutlinedInput-root": {
                    paddingRight: "12px",
                    paddingLeft: 2,
                  },
                  paddingRight: 0,
                  "@media (max-width: 600px)": {
                    "& .MuiOutlinedInput-root": {
                      paddingTop: "6px",
                      paddingBottom: "6px",
                    },
                  },
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Button
                        className="hidden"
                        sx={{
                          color: { xs: "#FC6011", md: "white" },
                          backgroundColor: { xs: "none", md: "#FC6011" },
                          borderRadius: "14px",
                          fontSize: 16,
                          paddingRight: 4,
                          paddingLeft: 6,
                          paddingTop: 1,
                          paddingBottom: 1,
                          textTransform: "capitalize",
                          fontWeight: { xs: "600", md: "400" },
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

            <div className="left-side my-2 ml-2.5 flex flex-col md:flex-row justify-between items-center">
              <div className="w-full flex flex-col items-center md:items-start order-2 md:order-1 mt-10 md:mt-0">
                <h2 className="text-4xl font-bold mb-4 md:mb-0 text-black font-ubuntu">
                  pti<span className="text-red-500">.</span>
                </h2>
                <p className="font-poppins text-black font-medium py-5 px-2 tracking-tight">
                  Copyright©Tripp. All Rights Reserved
                </p>
              </div>
              <div className="icons order-1 md:order-2 mr-2 flex items-center gap-3 mt-8">
                <IconButton
                  aria-label="google"
                  sx={{
                    color: { xs: "white", md: "#FC6011" },
                    padding: { xs: 2, md: 1 },
                    backgroundColor: { xs: "#FC6011", md: "white" },
                    borderRadius: 100,
                  }}
                >
                  <Google fontSize="small" />
                </IconButton>
                <IconButton
                  aria-label="twitter"
                  sx={{
                    color: { xs: "white", md: "#FC6011" },
                    padding: { xs: 2, md: 1 },
                    backgroundColor: { xs: "#FC6011", md: "white" },
                    borderRadius: 100,
                  }}
                >
                  <Twitter fontSize="small" />
                </IconButton>
                <IconButton
                  aria-label="instagram"
                  sx={{
                    color: { xs: "white", md: "#FC6011" },
                    padding: { xs: 2, md: 1 },
                    backgroundColor: { xs: "#FC6011", md: "white" },
                    borderRadius: 100,
                  }}
                >
                  <Instagram fontSize="small" />
                </IconButton>
              </div>
            </div>
          </div>
          <div className="hidden image-right md:block">
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
