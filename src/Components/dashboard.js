import React , {Component} from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import avatar from '../images/avatar.jpg';
import './dashboard.css';
import { Link } from "react-router-dom"; 
import scene from '../images/scene.jpg';
import second from '../images/2nd.jpg';
import food from '../images/food.jpg';
import jason from '../images/jason kilar.jpg';
import kamla from '../images/kamla.jpg';
import leadership from '../images/leadership.jpg';

class Dashboard extends Component{
    render(){
        return(
              <div className="Dashboard">
                  <Container fluid={true}>
                  <Row>
                  <Col lg="4" xl="4">
                    <div className="mt-3 mx-3 shadow userDiv">
                       <Container className="user py-3 text-align">
                       <Row className="text-center">
                            <Col md="12" lg="12" xl="12" sm="12" xs="12" cl>
                                <img  rounded alt="not found" src={avatar} className="d-block mx-auto  img-fluid rounded-circle shadow w-50" />
                            </Col>
                        </Row>
                        <Row className="userInfo text-capitalize">
                                   <Col xs="12">
                                        <h2>elon musk</h2>
                                   </Col>
                        </Row>
                        <Row className="userInfo text-capitalize">
                                   <Col xs="6">
                                        <h6><span class="material-icons">whatshot</span> Followers</h6>
                                   </Col>
                                   <Col xs="6">
                                        <h6>1892</h6>
                                   </Col>
                        </Row>
                        <Row className="userInfo text-capitalize">
                                   <Col xs="6">
                                        <h6><span class="material-icons">person_pin</span> Following</h6>
                                   </Col>
                                   <Col xs="6">
                                        <h6>29190</h6>
                                   </Col>
                        </Row>
                        <Row className="text-capitalize">
                                 <Col xs="6"><h6 style={{display:"inline"}}><span class="material-icons">history_edu</span> Blogs</h6></Col>
                                 <Col xs="6"><h6>29928</h6></Col>
                        </Row> 
                        <Row>
                                 <Col className="py-3 text-center">
                                 <Link to = "/editprofile"><Button outline color="secondary" size="md" block><span class="material-icons">edit</span> Edit Profile</Button></Link>
                                 </Col>
                        </Row>  
                        <Row>
                                 <Col className=" pt-1 pb-3 text-center">
                                 <Link to = "/bookmark"><Button outline color="secondary" size="md" block><span class="material-icons">bookmark</span>Bookmarked Blogs</Button></Link>
                                 </Col>
                        </Row>  
                        <Row>
                            <Col lg="12"><p><b>About</b></p></Col>
                            <Col lg="12"><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
                                the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and 
                                scrambled it to make a type specimen book.</p></Col>
                        </Row>
                        <Row>
                            <Col><p><span class="material-icons">person_outline</span> Student</p></Col>
                        </Row>
                        <Row>
                            <Col><p><span class="material-icons">alternate_email</span> xyz@gmail.com</p></Col>
                        </Row>
                        <Row>
                            <Col><p><span class="material-icons">call</span> +91-9898989898</p></Col>
                        </Row>
                        <hr style={{borderColor:"#9ba4b4"}}></hr>
                        <Row>
                            <Col>
                                <h5>Topics Following</h5>
                                <p>webdev,iot,ml,ai,blockchain,nuclear physics</p>
                            </Col>
                        </Row>
                       </Container>
                    </div>
                  </Col>
                  <Col lg="8" xl="8">
                  <Container fluid={false} className="mb-5">
                  <div className="gallery">
                    <div style ={{borderBottom: "1px solid grey"}}>
                        <div style = {{display: "flex"}}>
                            <div style={{textAlign: "left",  marginTop: "3%", marginBottom: "1%", 
                                fontSize: "18px"}}>
                            <div style={{textAlign: "left", marginBottom: "2.5%"}}>
                                <h1>Let There Be Light</h1>
                            </div>
                            <div style={{marginRight: "20%"}}>
                                <h6>See, I told you 2020 would be a great year! They counted and they counted and
                                they counted. In PA they reached the end of Pi, and still they counted…</h6>
                            </div>
                            </div>
                            <img className="item" src= {scene} />
                            </div>
                            <div style={{color: "rgba(26, 137, 23, 1)",  marginTop: "1%", marginBottom: "3%" }}>
                                <h7>Read more : 3 min read</h7>
                            </div>
                            <div style= {{display: "flex",  marginRight: "15%"}}>
                            <span class="material-icons" >favorite_border</span>
                                <h5>289</h5>
                                <span class="material-icons" style={{marginLeft: "80%"}}>turned_in_not</span>
                            </div>

                    </div>
                    <div style ={{borderBottom: "1px solid grey"}}>
                        <div style = {{display: "flex"}}>
                        
                            <div style={{textAlign: "left",  marginTop: "3%", marginBottom: "1%", 
                                fontSize: "18px"}}>
                            <div style={{textAlign: "left", marginBottom: "2.5%"}}>
                                <h1>The Way of the Future</h1>
                            </div>
                            <div style={{marginRight: "20%"}}>
                                <h6>Look, it’s late. And everyone is happy enough so there’s no pressing need to 
                                    weigh in here. And you should take everything I’m about to say with some truly massive 
                                    grains of salt.¹…</h6>
                            </div>
                            </div>
                            <img className="item" src= {second} />
                            </div>
                            <div style={{color: "rgba(26, 137, 23, 1)",  marginTop: "1%", marginBottom: "3%" }}>
                                <h7>Read more : 3 min read</h7>
                            </div>
                            <div style= {{display: "flex",  marginRight: "15%"}}>
                            <span class="material-icons" >favorite_border</span>
                                <h5>289</h5>
                                <span class="material-icons" style={{marginLeft: "80%"}}>turned_in_not</span>
                            </div>
                    </div>
                    <div style ={{borderBottom: "1px solid grey"}}>
                        <div style = {{display: "flex"}}>
                        
                            <div style={{textAlign: "left",  marginTop: "3%", marginBottom: "1%", 
                                fontSize: "18px"}}>
                            <div style={{textAlign: "left", marginBottom: "2.5%"}}>
                                <h1>Whoa!</h1>
                            </div>
                            <div style={{marginRight: "20%"}}>
                                <h6>Jason Kilar, the CEO of Warner Media, is not fucking around. Hot on the heels of his 
                                    bold move to not only push Wonder Woman 1984 directly to HBO Max in time for Christmas, 
                                    he pulls the truly brazen one in...</h6>
                            </div>
                            </div>
                            <img className="item" src= {jason} />
                            </div>
                            <div style={{color: "rgba(26, 137, 23, 1)",  marginTop: "1%", marginBottom: "3%" }}>
                                <h7>Read more : 3 min read</h7>
                            </div>
                            <div style= {{display: "flex",  marginRight: "15%"}}>
                            <span class="material-icons" >favorite_border</span>
                                <h5>289</h5>
                                <span class="material-icons" style={{marginLeft: "80%"}}>turned_in_not</span>
                            </div>
                    </div>
                    <div style ={{borderBottom: "1px solid grey"}}>
                        <div style={{display : "flex"}}>
                        
                            <div style={{textAlign: "left",  marginTop: "3%", marginBottom: "1%", 
                                fontSize: "18px"}}>
                            <div style={{textAlign: "left", marginBottom: "2.5%"}}>
                                <h1>Immune-Boosting Meals to Keep You Strong</h1>
                            </div>
                            <div style={{marginRight: "20%"}}>
                                <h6>Let’s talk Thanksgiving 2020: Knowable — the company that launched my audiocourse, 
                                    How to Eat Now — hosted this conversation, which includes thoughts on what to serve 
                                    as the main course instead of…</h6>
                            </div>
                            </div>
                            <img className="item" src= {food} />
                            </div>
                            <div style={{color: "rgba(26, 137, 23, 1)",  marginTop: "1%", marginBottom: "3%" }}>
                                <h7>Read more : 3 min read</h7>
                            </div>
                            <div style= {{display: "flex",  marginRight: "15%"}}>
                            <span class="material-icons" >favorite_border</span>
                                <h5>289</h5>
                                <span class="material-icons" style={{marginLeft: "80%"}}>turned_in_not</span>
                            </div>
                    </div>
                    <div style ={{borderBottom: "1px solid grey"}}>
                        <div style = {{display: "flex"}}>
                        
                            <div style={{textAlign: "left",  marginTop: "3%", marginBottom: "1%", 
                                fontSize: "18px"}}>
                            <div style={{textAlign: "left", marginBottom: "2.5%"}}>
                                <h1>America is ready. And so are Joe and I.</h1>
                            </div>
                            <div style={{marginRight: "20%"}}>
                                <h6>Congressman John Lewis, before his passing, wrote: “Democracy is not a state. It is an act.”
                                    And what he meant was that America’s democracy is not guaranteed.
                                    It is only as strong…</h6>
                            </div>
                            </div>
                            <img className="item" src= {kamla} />
                            </div>
                            <div style={{color: "rgba(26, 137, 23, 1)",  marginTop: "1%", marginBottom: "3%" }}>
                                <h7>Read more : 3 min read</h7>
                            </div>
                            <div style= {{display: "flex",  marginRight: "15%"}}>
                            <span class="material-icons" >favorite_border</span>
                                <h5>289</h5>
                                <span class="material-icons" style={{marginLeft: "80%"}}>turned_in_not</span>
                            </div>
                    </div>
                    <div style ={{borderBottom: "1px solid grey"}}>
                        <div style={{display: "flex"}}>
                        
                            <div style={{textAlign: "left",  marginTop: "3%", marginBottom: "1%", 
                                fontSize: "18px"}}>
                            <div style={{textAlign: "left", marginBottom: "2.5%"}}>
                                <h1>Advancing our leadership around the world</h1>
                            </div>
                            <div style={{marginRight: "20%"}}>
                                <h6>I have always believed in the nobility of public service, and these Americans embody it.
                                Their lives and careers are a testament to the dedication, sacrifice, and commitment to civic 
                                responsibility…</h6>
                            </div>
                            </div>
                            <img className="item" src= {leadership} />
                            </div>
                            <div style={{color: "rgba(26, 137, 23, 1)",  marginTop: "1%", marginBottom: "3%" }}>
                                <h7>Read more : 3 min read</h7>
                            </div>
                            <div style= {{display: "flex",  marginRight: "15%"}}>
                            <span class="material-icons" >favorite_border</span>
                                <h5>289</h5>
                                <span class="material-icons" style={{marginLeft: "80%"}}>turned_in_not</span>
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

export default Dashboard;
