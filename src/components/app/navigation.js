import React, { Component } from 'react';
import {Dialog, RaisedButton, Divider, Chip, CardHeader, CardTitle, DatePicker, Card, TextField, SelectField, MenuItem} from 'material-ui';

const style={
	textField: { width: '40%', margin: '10px' },
	 chip: {
        margin: 4,
      },
      wrapper: {
        display: 'flex',
        flexWrap: 'wrap',
      }
}

class Navigation extends Component {
	constructor(props){
		super(props);
		this.state= {
			modalOpen: false,
			skillField: false,
			skills: [],
			skillsShow: false,
			singleSkill: ''
		}
	}
	handleSkill = (data)=>{
		this.setState({
			singleSkill: data
		});
	}
	handleInsertSkill = ()=>{
		let skills = this.state.skills;
		skills.push({skill: this.state.singleSkill});
		this.setState(skills);
		console.log(this.state.skills)
	}
	deleteSkill = (k)=>{
		let skills = this.state.skills;
		skills.splice(k,1);
		this.setState(skills);
		console.log(this.state.skills);
	}
    render() {
        return (
        <div>
        	<header id="header">
	            <div className="header__main">
	                <div className="container">
	                    <a className="logo">
	                        <img src="./Roost - Material Design Real Estate_files/logo.png" alt=""/>
	                        <div className="logo__text">
	                            <span>Bizaffix</span>
	                            <span>Material Design Real Estate</span>
	                        </div>
	                    </a>

	                    <div className="navigation-trigger visible-xs visible-sm" onClick={()=>alert('sadsda')} >
	                        <i className="zmdi zmdi-menu"></i>
	                    </div>

	                    <ul className="navigation">
	                        <li className="visible-xs visible-sm"><a className="navigation__close"><i className="zmdi zmdi-long-arrow-right"></i></a></li>

	                        <li className="navigation__dropdown active">
	                            <a>Form</a>
	                        </li>

	                        <li className="navigation__dropdown">
	                            <a className="prevent-default">About us</a>
	                        </li>

	                        <li className="navigation__dropdown">
	                            <a>Contact us</a>
	                        </li>
	                    </ul>
	                </div>
	            </div>
	        </header>
	        <section className="section">
				<div className="container">
					<header className="section__title">
						<h2>Submit Form</h2>
						<small>Description about form</small>
					</header>
					<div className="submit-property">
						<div className="tab-content submit-property__content">
							<Card >
								<div>
									<CardTitle title="Personal Information" />	
									<Divider />
									<TextField
									  style={style.textField}
								      floatingLabelText="First Name"
								      required
								    />
								    <TextField
									  style={style.textField}
								      floatingLabelText="Last Name"
								    />
								    <TextField
									  style={style.textField}
								      floatingLabelText="City"
								    />
								    <TextField
									  style={style.textField}
								      floatingLabelText="Province/State"
								    />
								    <TextField
									  style={style.textField}
								      floatingLabelText="Country"
								    />
								    <TextField
									  style={style.textField}
								      floatingLabelText="Country"
								    />
								    <DatePicker hintText="Date Of Birth" style={style.textField} />
								    <CardTitle title="Experience" subtitle="For students this is not mandatory" />	
									<Divider />

									<TextField
									  style={style.textField}
								      floatingLabelText="Company"
								    />
								    <TextField
									  style={style.textField}
								      floatingLabelText="Designation"
								    /><br />
								    <label style={{margin: '10px',paddingLeft: '8%',float: 'left'}} >Duration: </label>
								    <DatePicker hintText="From" style={{width:'30%', marginLeft:'5%'}} />
								    <DatePicker hintText="To" style={{width:'38%', margin: '10px'}} />
								    <TextField
								      floatingLabelText="Responsibilities"
								      multiLine={true}
								      rows={2}
								      style={{width: '84%'}}
								      floatingLabelStyle={{position:'relative', float: 'left'}}
								    />

								    <CardTitle title="Education"/>	
									<Divider />
									<TextField
									  style={style.textField}
								      floatingLabelText="Institute"
								    />
								    <TextField
									  style={style.textField}
								      floatingLabelText="Degree"
								    /><br />
								    <label style={{margin: '10px',paddingLeft: '8%',float: 'left'}} >Duration: </label>
								    <DatePicker hintText="From" style={{width:'30%', marginLeft:'5%'}} />
								    <DatePicker hintText="To" style={{width:'38%', margin: '10px'}} />	
								    <TextField
								      floatingLabelText="Details"
								      multiLine={true}
								      rows={2}
								      style={{width: '84%'}}
								      floatingLabelStyle={{position:'relative', float: 'left'}}
								    />
								    <CardTitle title="Skills"/>	
									<Divider />

									<div style={{marginLeft: '30px'}} >
										<label>Skills: </label>
									    <RaisedButton label="Add Skills" onClick={()=>this.setState({skillField: true})} />
									    {this.state.skillField &&
									    <div>
										    <TextField
											  style={style.textField}
										      floatingLabelText="Skill"
										      onChange={(event)=>this.handleSkill(event.target.value)}
										    />
										     <RaisedButton
										      backgroundColor="#a4c639"
										      icon={<span className="zmdi zmdi-check"></span>}
										      style={{marginRight: '20px'}}
										      onClick={this.handleInsertSkill}
										    />
										     <RaisedButton
										      backgroundColor="#ff0000"
										      onClick={()=>this.setState({skillField: false})}
										      icon={<span className="zmdi zmdi-close"></span>}
										    />
										</div>
										}
										{this.state.skills.length <0 ? null :
									  	<div style={{marginLeft: '40%'}} >
									  		{this.state.skills.map((item,k)=>	
									  		<Chip
										        key={0}
										        style={style.chip}
										        onRequestDelete={()=>this.deleteSkill(k)}
										      	key={k}
										      	>
										        {item.skill}
										    </Chip>
											)}
									  	</div>
									  	}
									</div>
									<CardTitle title="Contact Details"/>	
									<Divider />
									<TextField
									  style={style.textField}
								      floatingLabelText="Email"
								    />
								    <TextField
									  style={style.textField}
								      floatingLabelText="Address"
								    />
								    <TextField
									  style={style.textField}
								      floatingLabelText="Mobile No"
								    />
								    <TextField
									  style={style.textField}
								      floatingLabelText="Facebook Profile URL"
								    />
								    <TextField
									  style={style.textField}
								      floatingLabelText="LinkedIn Profile URL"
								    />
								    <TextField
									  style={style.textField}
								      floatingLabelText="Twitter Profile URL"
								    /><br />
								    <RaisedButton label="Submit" primary={true} style={{margin:15}} />
								</div>
							</Card>
						</div>
					</div>
				</div>
	        </section>
        </div>
        );
    }
}

export default Navigation;
