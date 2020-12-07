import React , {Component} from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import avatar from '../images/avatar.jpg';
import './dashboard.css';
import { Link } from "react-router-dom"; 
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Info from '@material-ui/icons/Info';
import Email from '@material-ui/icons/Email';
import Phone from '@material-ui/icons/Phone';
import Notes from '@material-ui/icons/Notes';
import bg from '../images/bg.webp';


class  Editprofile extends Component{
    
    render(){
        return(

              <div className="Editprofile" style={{backgroundImage: "url(" + bg + ")",backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat'}}>
                  <Container fluid={true} >
                  <Row>
                  <Col lg="4" xl="4">

                      <Row style={{marginLeft:"10%", marginBottom:"15%", marginTop:"5%"}}>
                          <h3><u>Edit Profile</u></h3>
                      </Row>
                  <Col md="12" lg="12" xl="12" sm="12" xs="12" cl>

                                <img  rounded alt="not found" src={avatar} className="d-block mx-auto  img-fluid rounded-circle shadow w-50" />
                            </Col>
                <div style={{marginTop:"5%",marginLeft:"15%"}}>
                    
                    <form>
                        <input type='file' className='Choose Image '/>
                        <div style={{marginTop:"10%"}}>
                    <button className='btn btn-outline-dark slantfont'>Upload</button>
                    </div>
                        </form>
                </div>
                  </Col>
                  <Col lg="8" xl="8">
                  <Container fluid={false}>
                        <div>
                        <div style={{display:"flex",justifyContent:"space-around"}}> 
                            <Grid container spacing={1}  style={{marginTop:"25%",marginRight:"10%"}}>
                            <Grid item>
                                < Info/>
                            </Grid>
                            <Grid item>
                                <TextField id="input-with-icon-grid" label="About" style={{width:"150%"}}/>
                            </Grid>
                            </Grid>
                            <Grid container spacing={1}  style={{marginTop:"25%",marginRight:"10%",marginLeft:"10%"}}>
                            <Grid item>
                                <AccountCircle />
                            </Grid>
                            <Grid item>
                                <TextField id="input-with-icon-grid" label="Profession" style={{width:"150%"}} />
                            </Grid>
                            </Grid>
                        </div>
                        <div style={{display:"flex",justifyContent:"space-around"}}> 
                            <Grid container spacing={1}  style={{marginTop:"5%",marginRight:"10%"}}>
                            <Grid item>
                                <Email />
                            </Grid>
                            <Grid item>
                                <TextField id="input-with-icon-grid" label="E-mail" style={{width:"150%"}}/>
                            </Grid>
                            </Grid>
                            <Grid container spacing={1}  style={{marginTop:"5%",marginRight:"10%",marginLeft:"10%"}}>
                            <Grid item>
                                <Phone />
                            </Grid>
                            <Grid item>
                                <TextField id="input-with-icon-grid" label="Phone" style={{width:"150%"}} />
                            </Grid>
                            </Grid>
                        </div>
                        <div style={{display:"flex",justifyContent:"space-around"}}> 
                            <Grid container spacing={1}  style={{marginTop:"5%",marginRight:"10%"}}>
                            <Grid item>
                                <Notes />
                            </Grid>
                            <Grid item>
                                <TextField id="input-with-icon-grid" label="Topics following" style={{width:"150%"}}/>
                            </Grid>
                            </Grid>
                        </div>
                        <div style={{display:"flex"}}>
                        <div style={{marginTop:"5%", marginLeft:"20%"}}>
                        <Button variant="contained" color="primary" href="/dashboard" style={{marginBottom:"10%"}}><div>Save Changes</div></Button>
                        </div>
                        <div style={{marginTop:"5%", marginLeft:"20%"}}>
                        <Button variant="contained" color="danger">Delete Account</Button>
                        </div>
                        </div>
                        </div>
                     </Container>
                  </Col>
                 </Row>
                 </Container>
                     
                </div>
                
        );
    }
}

export default Editprofile;
