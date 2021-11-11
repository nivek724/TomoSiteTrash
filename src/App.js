import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import {Typography} from '@material-ui/core'; 
import {Text,Grid, Row, ItemOne, ItemTwo, Message, ItemThree, Title, SubTitle, Info, Atag, Simg, CRow} from './styles.js';
// import NavBar from './components/NavBar'
// import Grid from './components/Grid'
// import Footer from './components/Footer'
import './App.css';
//changes to imports 
// import SecurityIcon from '@material-ui/icons/Security';
// import EventNoteIcon from '@material-ui/icons/EventNote';
// import TrendingUpIcon from '@material-ui/icons/TrendingUp';
// import ImportExportIcon from '@material-ui/icons/ImportExport';
// import ComputerIcon from '@material-ui/icons/Computer';
// import HttpIcon from '@material-ui/icons/Http';
import mug from './images/mug.png';
import band from './images/Band.png';
import santa from './images/santa.jpg';
import curry from './images/curry.png';
import cn from './images/cn.jpg';

const theme = createMuiTheme({
  palette: {
    primary: {
      main:"#e6e7e9",
    },
    secondary: {
      main:"#0000FF",
    },
  },
  typography: {
    fontFamily: [
      'Roboto'
    ],
    h4: {
      fontWeight: 600,
      fontSize: 28,
      lineHeight: '2rem',
      },
    h5: {
      fontWeight: 100,
      fontSize:20,
      lineHeight: '1rem',
    },
  },
});

const styles = makeStyles({
  wrapper: {
    width: "65%",
    margin: "auto",
    textAlign: "center"
  },
  bigSpace: {
    marginTop: "5rem"
  },
  littleSpace:{
    marginTop: "2.5rem",
  },
  grid:{
    display: "flex", 
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap", 
  },
})


function App() {
  const classes = styles(); 
  const text = [
    "Mug Fundraiser",
    "IMs",
    "CN Practices",
    "Secret Tomo",
    "TNTs Shoutouts",
    "General Meeting & Afterevent"
  ];
  const info = [
    [
      "•  If you are interested in purchasing a Tomo mug, we are selling them for $10",
      "•  Comes with a sticker and wristband!"
    ],
    [
      "•  Women’s volleyball: Wed, 9:30 at arc main court",
      "•  Men’s volleyball: Wed, 7:30 and 8:30 at arc main court (Please come cheer for the 7:30 game because we need a big cheering squad)"
    ],
    [
      "•  Skit: Wed from 6-10pm at HH 232",
      "•  Modern: Mon from 7:30-9pm at SSH",
      "•  Tones: Mon from 9-10pm at SSLH 100",
      "•  Odori: Wed from 5-6:20 at HH 230"
    ],
    [
      "•  Like Secret Santa but better 🎅",
      "•  Sign up if you are interested!",
    ],
    [
      "•  Due Nov 16 @ 11:59pm",
      "•  Mandatory for Cabinet and Unkies",
      "•  Send to tomonohistorian@gmail.com"
    ],
    [
      "•  6pm on Thursday at Howard Schneiderman Lecture Hall 100A (HSLH 100A)",
      "•  Aftwards => CURRY NIGHT 🍛"
    ]

  ]
  const message = "Hey Donda Family!! Hope midterms went well! Check Out The Announcements!!";
  const makeInfo = (info) => (
    <Info>
      {info}
    </Info>
  );

  return (
    <div className="App" style={{
      position: "absolute",
      display: "flex",
      flexDirection: "column",
      alignItems: "stretch",
      backgroundColor: "#000002",
      width: "100%"
    }}>
      <ThemeProvider theme={theme}>
        {/* <Typography variant="h4" className={classes.littleSpace} color="primary" styles={{
          textShadow: "#fe00b2 1px 0 10px"
        }}>
          Week 7 ANNOUNCEMENTS
        </Typography> */}
        <Title>
          Week 7 ANNOUNCEMENTS
        </Title>
        <SubTitle>
          Wow Time Is Moving Fast
        </SubTitle>
        {/* <Typography varirant="h5" className={classes.grid} color="primary">
          Wow Time Is Moving Fast
        </Typography> */}
        
        <Grid>
          <ItemThree>
            <Message>
              {message}
            </Message>
          </ItemThree>
          
          <Row>
            <ItemOne>
              <Text>
                {text[0]}
              </Text>
              {info[0].map(makeInfo)}
              <CRow>
                <Simg src={mug}/>
                <Simg src={band}/>
              </CRow>
              
            </ItemOne>
            <ItemTwo>
              <Text>
                {text[1]}
              </Text>
              {info[1].map(makeInfo)}

              <iframe src="https://giphy.com/embed/3ov9jTNQZI2L3M4NB6" maxWidth="200px" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/xbox-3ov9jTNQZI2L3M4NB6">via GIPHY</a></p>
            </ItemTwo>
          </Row>
          <Row>
            <ItemOne>
              <Text>
                {text[2]}
              </Text>
              {info[2].map(makeInfo)}
              <Simg src={cn}/>
            </ItemOne>
            <ItemTwo>
              <Text>
                {text[3]}
              </Text>
              {info[3].map(makeInfo)}
              <Simg src={santa}/>
              <Atag href="https://l.facebook.com/l.php?u=https%3A%2F%2Fdocs.google.com%2Fforms%2Fd%2Fe%2F1FAIpQLSf-pAJzyx5ulhU2UDmSMEYe4q5KFpAUT6u6Oji1hVsKUZtmzw%2Fviewform%3Ffbclid%3DIwAR1acIoIK3lQ-dteWgr1dD_AkILFJqgsnPgs-F0NzG4lgoa5nK7fIyEKhpc&h=AT3EcSkBD2K5hAA4e-tn6BdsjCIHHwV1NiPyydZZsGOuzUZKxh71O3hMqkqBXxO9yTPPJoPtCo-44eQU9p0lpGd3nhjs1nVXielXqXbQn7e8lFufgagY4VCAr6TMmutlREO1KV1vEQdRf0VtvrRx&__tn__=-UK-R&c[0]=AT3uwj_WvoJ5Pp6iqRsjwJxFaWj46Q1kuLBAawpnLwj8d_Gh4ryTp8C_b_Ar76hnyMbhe2lRy3A30gSnOXkkQqVuZm9UZGbDEhASBeC0xTYX2FNUPBtDdeoqUT4goOzz85PDCamHd1H_jFV50cNa47z5OLAU7jLp3GGPzl8RTeX_9mQkINn-CGrv0nYn-s0JK90XeaAkSPPNJ97kcg">
                Form here!
              </Atag>
            </ItemTwo>
          </Row>
          <Row>
            <ItemOne>
              <Text>
                {text[4]}
              </Text>
              {info[4].map(makeInfo)}
              
            </ItemOne>
            <ItemTwo>
              <Text>
                {text[5]}
              </Text>
              {info[5].map(makeInfo)}
              <Simg src={curry}/>
            </ItemTwo>
          </Row>
        </Grid>
        
        {/* <NavBar/>
        <div className={classes.wrapper}>
          <Typography variant="h4" className={classes.bigSpace} color="primary">
             At Rocket.io we are passionate about software
          </Typography>
          <Typography variant="h5" className={classes.littleSpace} color="primary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sodales congue tristique. Cras non pretium sem. Duis interdum lorem sit amet ligula pretium, sed rutrum urna semper. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus egestas gravida ullamcorper.
          </Typography>
        </div>
        <div className={`${classes.grid} ${classes.bigSpace}`}>
          <Grid icon={<SecurityIcon style={{fill: "#4360A6", height:"125", width:"125"}}/>}  title="Secure" btnTitle="Show me More" />
          <Grid icon={<EventNoteIcon style={{fill: "#449A76", height:"125", width:"125"}}/>} title="Reliable" btnTitle="Show me More"/>
          <Grid icon={<TrendingUpIcon style={{fill: "#D05B2D", height:"125", width:"125"}}/>}  title="Performant" btnTitle="Show me More"/>
        </div>
        <div className={`${classes.grid} ${classes.littleSpace}`}>  
          <Grid icon={<ImportExportIcon style={{fill: "#5EA780", height:"125", width:"125"}}/>}  title="Modular" btnTitle="Show me More"/>
          <Grid icon={<ComputerIcon style={{fill: "#E69426", height:"125", width:"125"}}/>}  title="Multi-Platform" btnTitle="Show me More"/>
          <Grid icon={<HttpIcon style={{fill: "#2EA09D", height:"125", width:"125"}}/>} title="Connected" btnTitle="Show me More"/>
        </div>
        <div className={classes.bigSpace}>
          <Footer/>
        </div> */}
      </ThemeProvider>
    </div>
  );
}

export default App;
