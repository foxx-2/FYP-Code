import React from "react";

import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import Divider from '@material-ui/core/Divider';


//grid import
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
//import EllipsisText from "react-ellipsis-text";

//Avatar import
import Avatar from "@material-ui/core/Avatar";
import HomeIcon from "@material-ui/icons/Home";
import PhoneIcon from "@material-ui/icons/Phone";
import MailIcon from "@material-ui/icons/Mail";
import StarsIcon from "@material-ui/icons/Stars";
import EllipsisText from "react-ellipsis-text";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
//TOAST MESSAGE
import { ToastContainer, toast } from "react-toastify";
import AssignmentIcon from "@material-ui/icons/Assignment";
import WcIcon from "@material-ui/icons/Wc";

//import QRCode from "react-qr-code";

//import theme provider
import {
  createMuiTheme,
  withStyles,
  makeStyles,
  ThemeProvider,
  responsiveFontSizes,
  useTheme,
} from "@material-ui/core/styles";

import { Typography, Slide, CircularProgress } from "@material-ui/core";

// theme set

let theme = createMuiTheme({
  typography: {
    fontFamily: ["Metrophobic", "sans-serif"].join(","),
  },
  primary: {
    main: "#2980B9",
  },
});
//Adjuts font size
theme = responsiveFontSizes(theme);

const useStyles = makeStyles((theme) => ({
  details:{
    justifyContent:"left",
    alignItems:"left",
  },
  large: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    marginTop: "3%",
    marginBottom: "3%",
  },
  div: { marginTop: "2%" },
}));

function PatientProfile() {
  //var { obj} = useParams();

  //var QRCode = require('qrcode.react');

  //var QRCode = require('qrcode.react');

  const classes = useStyles();
  const [id, setId] = React.useState();
  const [name, setName] = React.useState();
  const [patient_address, setPatient_Address] = React.useState();
  const [Address, setAddress] = React.useState();
  const [contact, setContact] = React.useState();
  const [age, setAge] = React.useState();
  const [specialization, setSpecialization] = React.useState();
  const [admission_date, setAdmission_date] = React.useState();
  const [gender, setGender] = React.useState();
  const [LastReading, SetLastReading] = useState("");

  const [seed, setSeed] = React.useState();
  const [dummy, setDummy] = React.useState();
  const canvas = useRef(null);

  let local_object = "";
  let ellipsis_Seed = "";

  //console.log("SEED=",JSON.parse(obj));

  //get seed data
  useEffect(() => {
    async function SeedInfo() {
      try {
        const data = localStorage.getItem("patient_profile");
        // console.log("Data=", data);
        local_object = JSON.parse(data);
        console.log("Patient object=", local_object);
        //localStorage.removeItem("seed_obj");

        //setting doctor object to variables
        //const name=local_seed.seed_obj.Profile.name;
        setName(local_object.Profile.name);
        setId(local_object.ID);
        //const address = local_seed.seed_obj.Profile.address;
        setPatient_Address(local_object.Profile.address);
        //const contact = local_seed.seed_obj.Profile.contact;
        setContact(local_object.Profile.contact);
        //const email = local_seed.seed_obj.Profile.email;
        //setEmail(local_seed.seed_obj.Profile.email);

        setAge(local_object.Profile.age);

        setAddress(local_object.ADDRESS);

        setAdmission_date(local_object.Profile.date);

        setGender(local_object.Profile.gender);

        setSeed(local_object.SEED);
        ellipsis_Seed = local_object.SEED.toString();
        console.log("e", ellipsis_Seed);

        //const specialization = local_seed.seed_obj.Profile.specialization;
        //setSpecialization(local_seed.seed_obj.Profile.specialization);

        //other info
        //const num_of_pat = local_seed.num_of_pat;
        //setNum_of_pat(local_seed.num_of_pat);
        //const id = local_seed.seed_obj.ID;
        //const seed = local_seed.seed_obj.SEED;
        //setSeed(local_seed.seed_obj.SEED);
        //setDummy= seed;

        console.log(
          name,
          //address,
          contact,
          //email,
          specialization,
          //num_of_pat,
          // id,
          seed
        );
        //
      } catch (e) {
        console.log("Cannot fetch");
      }
    }

    SeedInfo();
  }, []);

  useEffect(() => {
    async function getProfile() {
      console.log("HEre in", Address);

      //var obj = await fetch(
      //  `https://thetamiddleware.herokuapp.com/getAddressInfo/${seed}&${Address}`
      //);
      //obj = await obj.json();
      //SetPatient(obj.Profile);
      //Returns Hash
      var response = await fetch(
        `https://thetamiddleware.herokuapp.com/getLastTx/${Address}&vitals`
      );

      var resObj = await response.json();
      console.log("last Transaction=", resObj);
      if (resObj != false) {
        console.log("tx=", resObj);
        //Passing Hash of transaction
        var responseTx = await fetch(
          `https://thetamiddleware.herokuapp.com/getTx/${resObj}`
        );
        var resObjTx = await responseTx.json();
        console.log("Transaction response=", resObjTx.response);
        if (resObjTx != false) {
          SetLastReading(resObjTx.response);
          console.log("last Response", LastReading);
        }
      } else {
        // SetLastReading('No Reading');
        console.log("last Reading", "No Reading");
      }
    }
    getProfile();
  }, [Address]);

  var QRCode = require("qrcode.react");
  //var dummy=seed.json();

  if (Address != null && Address != null) {
    return (
      <ThemeProvider theme={theme}>
        <Navbar />
        <Typography variant="h2" style={{ marginTop: "2%", color: "#B4B4B4" }}>
          {name}'s Profile
        </Typography>
        <Grid container spacing={0} style={{ marginTop: "2%" }}>
          <Slide direction="left" in={true} timeout={300}>
            <Grid item xs="7">
              <Paper
                elevation={5}
                style={{
                  marginLeft: "2%",
                  backgroundColor:"#E5E8EA"
                  ,
                
                  bordeStyle: "groove",

                  color: "white",
                  
                  maxHeight: "100%",
                }}
              >
               
               {/** <div
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                    backgroundColor: "#2980B9",
                  }}
                >
                  <Typography variant="h3"> ID : {id}</Typography>
                </div> */}

                <div
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  display: "flex",
                }}
              >
                <Avatar
                  className={classes.large}
                  style={{ backgroundColor: "#2980B9" }}
                >
                  <Typography variant="h4">{id}</Typography>
                </Avatar>
              </div>

              <div>
              <Divider />
              </div>

                <div className={classes.div} style={{ color: "black"  }}>

                  <div  className={classes.div}
                   >

                  <div className={classes.details}>
                    <Typography variant="h6">
                      {" "}
                    {/**  <HomeIcon
                        fontSize="small"
                        style={{ color: "black" }}
                    />*/}{" "}
                     Address: {patient_address}
                    </Typography>
                  </div>

                  <div
                    className={classes.details}
                  >
                    <Typography variant="h6">
                      {" "}
                      Admitted on : {admission_date}
                    </Typography>
                  </div>
                  <div className={classes.details}>
                    <Typography variant="h6">
                      {/**<PhoneIcon fontSize="small" />*/} Contact: {contact}
                    </Typography>
                  </div>
                  <div className={classes.details}>
                    <Typography variant="h6">

                      {/**<WcIcon fontSize="small" /> */}Gender:  {gender}
                    </Typography>
                  </div>
                 
                  <div
                     className={classes.details}
                  >
                    <Typography variant="h6"> Age : {age}</Typography>
                  </div>
                  </div>
                  </div>
                  </Paper>
                  </Grid>
                  </Slide>
                  </Grid>

                  <div style={{marginTop:"2%"}}><Divider /></div>


                  <Typography variant="h2" style={{ marginTop: "2%", color: "#B4B4B4" }}>
          QR Codes
        </Typography>



                  <Grid container spacing={0} style={{ marginTop: "2%"  }}>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={8}>
                      <Paper elevation={5} >

                      <div
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      display: "flex",
                      backgroundColor: "#2980B9",
                      color: "white",
                     
                      
                    }}
                  >
                    <Typography variant="h5" style={{ marginTop: "2%" }}>
                      Doctor's Seed : <EllipsisText text={seed} length={"20"} />
                    </Typography>
                  </div>

                  <div>
                    <QRCode value={seed} includeMargin="true" size="400" />
                  </div>

                      
                      </Paper>
                    </Grid>
                    <Grid item xs={2}></Grid>

                    

                    

                  </Grid>

                  <div style={{marginTop:"2%"}}><Divider /></div>

                  <Grid container spacing={0} style={{ marginTop: "2%" , marginBottom:"2%" }}>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={8}>
                      <Paper elevation={5} >
                      

                      <div
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      display: "flex",
                      backgroundColor: "#2980B9",
                      color: "white",
                    }}
                  >
                    <Typography variant="h5" style={{ marginTop: "2%" }}>
                      Patient's Address :{" "}
                      <EllipsisText text={Address} length={"20"} />
                    </Typography>
                  </div>

                  <div>
                    <Tooltip title="Copy" aria-label="add">
                      <QRCode
                        onHover={() => (
                          <Tooltip
                            title="Right Clip to copy"
                            aria-label="add"
                          ></Tooltip>
                        )}
                        value={Address}
                        includeMargin="true"
                        size="400"
                      />
                    </Tooltip>
                  </div>
                
                      </Paper>
                    </Grid>
                    <Grid item xs={2}></Grid>

                    

                    

                  </Grid>
                  
                  {/** 

                  <div
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      display: "flex",
                      backgroundColor: "#2980B9",
                      color: "white",
                    }}
                  >
                    <Typography variant="h5" style={{ marginTop: "2%" }}>
                      Doctor's Seed : <EllipsisText text={seed} length={"20"} />
                    </Typography>
                  </div>

                  <div>
                    <QRCode value={seed} includeMargin="true" size="400" />
                  </div>

                  <div
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      display: "flex",
                      backgroundColor: "#2980B9",
                      color: "white",
                    }}
                  >
                    <Typography variant="h5" style={{ marginTop: "2%" }}>
                      Patient's Address :{" "}
                      <EllipsisText text={Address} length={"20"} />
                    </Typography>
                  </div>

                  <div>
                    <Tooltip title="Copy" aria-label="add">
                      <QRCode
                        onHover={() => (
                          <Tooltip
                            title="Right Clip to copy"
                            aria-label="add"
                          ></Tooltip>
                        )}
                        value={Address}
                        includeMargin="true"
                        size="400"
                      />
                    </Tooltip>
                  </div>
                </div>
              </Paper>{" "}
            </Grid>
          </Slide>

          <Slide direction="right" in={true} timeout={300}>
            <Grid item xs="4">
              <Paper elevaion={5} style={{ marginRight: "1%" }}>
                <div>
                  <div
                    style={{
                      
                      width: "100%",
                      maxWidth: "100%",
                      backgroundColor: "#2980B9",
                    }}
                  >
                    <Typography variant="h4" style={{ color: "White" }}>
                      Last Transaction
                    </Typography>
                  </div>

                  <div
                    style={{
                      marginTop: "2%",
                      marginBottom: "2%",
                      backgroundColor: "#B4B4B4",
                    }}
                  >
                    <Slide direction="left" in={true} timeout={300}>
                      <Typography variant="h3" style={{ color: "white" }}>
                        {name}
                      </Typography>
                    </Slide>
                  </div>
                  <Typography variant="h2" style={{ color: "#B4B4B4" }}>
                    SEED
                  </Typography>
                  <div
                    style={{
                      marginTop: "2%",
                      marginBottom: "2%",
                      backgroundColor: "#B4B4B4",
                    }}
                  >
                    <Typography variant="body2" style={{ color: "black" }}>
                      {}

                      <CopyToClipboard text={seed}>
                        <Tooltip title="Copy" aria-label="add">
                          <IconButton
                            size="small"
                            onClick={() =>
                              toast("Seed Copied!", {
                                position: "top-right",
                                autoClose: 5000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                              })
                            }
                          >
                            {" "}
                           
                            <AssignmentIcon />
                          </IconButton>
                        </Tooltip>
                      </CopyToClipboard>
                    </Typography>
                  </div>

                  <QRCode value="" includeMargin="true" size="400" />
                </div>
              </Paper>
            </Grid>
          </Slide>
        */}
        
      </ThemeProvider>
    );
  } else {
    return (
      <ThemeProvider theme={theme}>
        <Navbar />
        {/** <Typography
            variant="h3"
            style={{ marginTop: "2%", color: "#B4B4B4" }}
          >
            Doctors{" "}
          </Typography> */}
        <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
        <Grid container spacing={0}>
          {/**  <Grid item xs={0.5}></Grid> */}
          <Grid item xs={12}></Grid>
          {/**  <Grid item xs={0.5}></Grid> */}
        </Grid>
        {/**  <Typography variant="h1"> Loading...</Typography>*/}
        <CircularProgress size="200px" />
      </ThemeProvider>
    );
  }
}
export default PatientProfile;
