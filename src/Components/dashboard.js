import React , {Component} from 'react';
//import { Container, Row, Col } from 'reactstrap';
import avatar from '../images/avatar.jpg';
import { Container, Avatar, Grid } from '@material-ui/core';
import './dashboard.css';
import scene from '../images/scene.jpg';
import like from '../images/like.png';
import response from '../images/response.png';
import save from '../images/save.png';
import second from '../images/2nd.jpg';
import food from '../images/food.jpg';
import jason from '../images/jason kilar.jpg';
import kamla from '../images/kamla.jpg';
import leadership from '../images/leadership.jpg';

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
                             <h1>ELON MUSK</h1>
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
                  <div className="gallery">
                    <div style ={{borderBottom: "1px solid grey"}}>
                        <img className="item" src= {scene} />
                            <div style={{textAlign: "left",  marginTop: "3%", marginBottom: "1%", 
                                fontSize: "18px"}}>
                            <div style={{textAlign: "left", marginBottom: "2.5%"}}>
                                <h1>Let There Be Light</h1>
                            </div>
                            <div style={{marginRight: "20%"}}>
                                <h6>See, I told you 2020 would be a great year! They counted and they counted and
                                they counted. In PA they reached the end of Pi, and still they counted; as well they
                                should have because this election was about the largest ever American voting block across 
                                every race, gender, and creed coming together to set the country’s course back towards its 
                                hopeful future as a nation made great once, and now again, by diversity. They counted and 
                                they counted, and at long last, they reached 46. CNN called it. NYT called it. AP called it.
                                NBC unplugged the Kornacki. …</h6>
                            </div>
                            </div>
                            <div style={{color: "rgba(26, 137, 23, 1)",  marginTop: "1%", marginBottom: "3%" }}>
                                <h7>Read more : 3 min read</h7>
                            </div>
                            <div style= {{display: "flex",  marginRight: "15%"}}>
                                <img className = "icons-like" src= {like}/>
                                <h5>289</h5>
                                <img className = "bookmark" src= {save}/>
                            </div>
                    </div>
                    <div style ={{borderBottom: "1px solid grey"}}>
                        <img className="item" src= {second} />
                            <div style={{textAlign: "left",  marginTop: "3%", marginBottom: "1%", 
                                fontSize: "18px"}}>
                            <div style={{textAlign: "left", marginBottom: "2.5%"}}>
                                <h1>The Way of the Future</h1>
                            </div>
                            <div style={{marginRight: "20%"}}>
                                <h6>Look, it’s late. And everyone is happy enough so there’s no pressing need to 
                                    weigh in here. And you should take everything I’m about to say with some truly massive 
                                    grains of salt.¹ But as always, I care about jotting something down that will be proven right
                                     (or wrong — but mainly right) long term. So to expand a bit on a quick reaction I had to 
                                     my friend Casey’s post about the Slack/Salesforce deal…I don’t disagree with some of his high-level
                                      points — namely that it’s hard to compete with the enterprise sales/bundling machine that is
                                       Microsoft — but I also think they are points that are unique to our current moment in time, 
                                       yet are stated as immutable facts. And I know a lot of other people believe them to be true 
                                       and dogma as well. Really smart people. ……</h6>
                            </div>
                            </div>
                            <div style={{color: "rgba(26, 137, 23, 1)",  marginTop: "1%", marginBottom: "3%" }}>
                                <h7>Read more : 3 min read</h7>
                            </div>
                            <div style= {{display: "flex",  marginRight: "15%"}}>
                                <img className = "icons-like" src= {like}/>
                                <h5>289</h5>
                                <img className = "bookmark" src= {save}/>
                            </div>
                    </div>
                    <div style ={{borderBottom: "1px solid grey"}}>
                        <img className="item" src= {jason} />
                            <div style={{textAlign: "left",  marginTop: "3%", marginBottom: "1%", 
                                fontSize: "18px"}}>
                            <div style={{textAlign: "left", marginBottom: "2.5%"}}>
                                <h1>Whoa!</h1>
                            </div>
                            <div style={{marginRight: "20%"}}>
                                <h6>Jason Kilar, the CEO of Warner Media, is not fucking around. Hot on the heels of his 
                                    bold move to not only push Wonder Woman 1984 directly to HBO Max in time for Christmas, 
                                    he pulls the truly brazen one in announced that the entire Warner theatrical slate set for
                                     2021 will be shipped direct to consumers the same way.
                                That includes the new Suicide Squad, the new Godzilla/King Kong, Dune! And yes, the new Matrix. Fittingly, 
                                a truly “Whoa” moment.But it’s actually even crazier than that, because unlike the strategy Disney tried 
                                where they upsold Mulan to Disney+ subscribers, all of these movies from WW1984 onward will be available to
                                 all HBO Max subscribers at no additional cost. Given the budgets of some of the movies, that’s a truly 
                                 “holy shit” moment. Essentially, Kilar is saying the long-term value of HBO Max subscribers is worth more
                                  than the box office revenue of not just one of these movies but all of these movies. And if successful, he’s 
                                  not wrong! But it’s an insanely risky bet to make right now. …</h6>
                            </div>
                            </div>
                            <div style={{color: "rgba(26, 137, 23, 1)",  marginTop: "1%", marginBottom: "3%" }}>
                                <h7>Read more : 3 min read</h7>
                            </div>
                            <div style= {{display: "flex",  marginRight: "15%"}}>
                                <img className = "icons-like" src= {like}/>
                                <h5>289</h5>
                                <img className = "bookmark" src= {save}/>
                            </div>
                    </div>
                    <div style ={{borderBottom: "1px solid grey"}}>
                        <img className="item" src= {food} />
                            <div style={{textAlign: "left",  marginTop: "3%", marginBottom: "1%", 
                                fontSize: "18px"}}>
                            <div style={{textAlign: "left", marginBottom: "2.5%"}}>
                                <h1>Immune-Boosting Meals to Keep You Strong</h1>
                            </div>
                            <div style={{marginRight: "20%"}}>
                                <h6>Let’s talk Thanksgiving 2020: Knowable — the company that launched my audiocourse, 
                                    How to Eat Now — hosted this conversation, which includes thoughts on what to serve 
                                    as the main course instead of turkey, some ideas for favorite sides, how to navigate the most 
                                    stressful aspects of the holiday, and more. We also talked with Saru Jayaraman, President of One 
                                    Fair Wage, who spoke about the toll that this pandemic is taking on restaurant workers, which
                                     may be just the dose of perspective that a lot of us need right now, especially when we’re thinking 
                                     about what to be thankful for.
                                    It’s technically a video, but the visuals — mostly me sitting in my house with big headphones on — are not 
                                    particularly essential, so you can just put it on in the background and listen to it like a podcast.…</h6>
                            </div>
                            </div>
                            <div style={{color: "rgba(26, 137, 23, 1)",  marginTop: "1%", marginBottom: "3%" }}>
                                <h7>Read more : 3 min read</h7>
                            </div>
                            <div style= {{display: "flex",  marginRight: "15%"}}>
                                <img className = "icons-like" src= {like}/>
                                <h5>289</h5>
                                <img className = "bookmark" src= {save}/>
                            </div>
                    </div>
                    <div style ={{borderBottom: "1px solid grey"}}>
                        <img className="item" src= {kamla} />
                            <div style={{textAlign: "left",  marginTop: "3%", marginBottom: "1%", 
                                fontSize: "18px"}}>
                            <div style={{textAlign: "left", marginBottom: "2.5%"}}>
                                <h1>America is ready. And so are Joe and I.</h1>
                            </div>
                            <div style={{marginRight: "20%"}}>
                                <h6>Congressman John Lewis, before his passing, wrote: “Democracy is not a state. It is an act.”
                                    And what he meant was that America’s democracy is not guaranteed.
                                    It is only as strong as our willingness to fight for it, to guard it and never take it for granted.
                                    And protecting our democracy takes struggle.
                                    It takes sacrifice. There is joy in it and there is progress.
                                    Because We The People have the power to build a better future.
                                    And when our very democracy was on the ballot in this election, with the 
                                    very soul of America at stake, and the world watching, you ushered in a new day for America. …
                                …</h6>
                            </div>
                            </div>
                            <div style={{color: "rgba(26, 137, 23, 1)",  marginTop: "1%", marginBottom: "3%" }}>
                                <h7>Read more : 3 min read</h7>
                            </div>
                            <div style= {{display: "flex",  marginRight: "15%"}}>
                                <img className = "icons-like" src= {like}/>
                                <h5>289</h5>
                                <img className = "bookmark" src= {save}/>
                            </div>
                    </div>
                    <div style ={{borderBottom: "1px solid grey"}}>
                        <img className="item" src= {leadership} />
                            <div style={{textAlign: "left",  marginTop: "3%", marginBottom: "1%", 
                                fontSize: "18px"}}>
                            <div style={{textAlign: "left", marginBottom: "2.5%"}}>
                                <h1>Advancing our leadership around the world</h1>
                            </div>
                            <div style={{marginRight: "20%"}}>
                                <h6>I have always believed in the nobility of public service, and these Americans embody it.
                                Their lives and careers are a testament to the dedication, sacrifice, and commitment to civic 
                                responsibility that have strengthened our democracy — and kept America’s promise alive — for
                                 more than two hundred years.President-elect Biden and I have long known that when we were elected,
                                  we would inherit a series of unprecedented challenges upon walking into the White House.
                                Addressing these challenges starts with getting this pandemic under control, opening our economy
                                 responsibly, and making sure it works for working people. …</h6>
                            </div>
                            </div>
                            <div style={{color: "rgba(26, 137, 23, 1)",  marginTop: "1%", marginBottom: "3%" }}>
                                <h7>Read more : 3 min read</h7>
                            </div>
                            <div style= {{display: "flex",  marginRight: "15%"}}>
                                <img className = "icons-like" src= {like}/>
                                <h5>289</h5>
                                <img className = "bookmark" src= {save}/>
                            </div>
                    </div>
                     </div>
                </div>
        );
    }
}

export default Dashboard;
