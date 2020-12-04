import React , {Component} from 'react';
//import { Container, Row, Col } from 'reactstrap';
import avatar from '../images/avatar.jpg';
import { Container, Avatar, Grid } from '@material-ui/core';
import './dashboard.css';


class Dashboard extends Component{
    render(){
        return(
              <div className="Dashboard">
            
                  <Container maxWidth="lg">
                  <Grid container direction="row" justify="center" alignItems="center" display="inline"  className="user">
                        <Grid item lg={3} xs={12} sm={12} md={3} justify="center" alignItems="center" spacing={0} className="MuiGrid-align-items-lg-center,MuiGrid-align-items-xs-center">
                        <Avatar  alt="not found" src={avatar} style={{ height: 'auto', width: '150px', margin:'10%'}}/>
                        </Grid>
                        <Grid item lg={7}  xs={12} sm={12} md={7} justify="center" alignItems="center" spacing={0} className="MuiGrid-align-items-lg-center,MuiGrid-align-items-xs-center" >
                         <div>
                             <h1>FULL NAME</h1>
                             <Grid container direction="row" justify="center" alignItems="center" display="inline">
                             <Grid item lg={6} md={6} sm={6} xs={6} justify="center" alignItems="center" spacing={0} >
                              <h3>FOLLOWERS</h3>
                              <h2>1892</h2>
                             </Grid>
                             <Grid item lg={6} md={6} sm={6} xs={6} justify="center" alignItems="center" spacing={0} >
                             <h3>FOLLOWING</h3>
                             <h2>29190</h2>
                             </Grid>
                             </Grid>
                         </div> 
                        </Grid>
                  </Grid>
                  </Container>
              </div>
        );
    }
}

export default Dashboard;