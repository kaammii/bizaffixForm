import React, { Component } from 'react';
import { RaisedButton, Divider, Chip, CardTitle, DatePicker, Card, TextField} from 'material-ui';

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
			singleSkill: '',
			firstNameError: '',
			lastNameError: '',
			CityError: '',
			provinceError: '',
			countryError: '',
			nativeLanguageError: '',
			instituteError: '',
			degreeError: '',
			detailError: '',
			skillError: '',
			formData: []
		}
	}
	handleSkill = (data)=>{
		this.setState({
			singleSkill: data
		});
	}
	handleInsertSkill = ()=>{
		if (this.state.singleSkill==='') {
			this.setState({ skillError: 'Skill field is empty' })
		} else {
			let skills = this.state.skills;
			skills.push({skill: this.state.singleSkill});
			this.setState(skills);
			this.setState({ skillField: false,singleSkill: '',skillError: '' })
		}
	}
	deleteSkill = (k)=>{
		let skills = this.state.skills;
		skills.splice(k,1);
		this.setState(skills);
		console.log(this.state.skills);
	}
	handleSubmit=(e)=>{
		e.preventDefault();
		let firstName = this.refs.firstName.getValue();
		let degreeFrom = this.refs.degreeFrom.getValue();
		// console.log('degree from ',this.refs.degreeFrom.getValue(),' degree to ',this.refs.degreeTo.getValue());
		console.log(degreeFrom);
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
								<form onSubmit={this.handleSubmit} >
									<CardTitle title="Personal Information" />	
									<Divider />
									<TextField
									  style={style.textField}
								      floatingLabelText="First Name*"
								      required
								      onBlur={(e)=>{
								      	 if (e.target.value==='') {this.setState({firstNameError: 'First Name is required'})}
								      	 	else {this.setState({firstNameError: ''})}

								      }}
								  	  onChange={(e)=>this.setState({firstNameError: ''})}
								  	  errorText={this.state.firstNameError}
								  	  ref="firstName"
								    />
								    <TextField
									  style={style.textField}
								      floatingLabelText="Last Name*"
								      required
								      onBlur={(e)=>{
								      	 if (e.target.value==='') {this.setState({lastNameError: 'Last Name is required'})}
								      	 	else {this.setState({lastNameError: ''})}

								      }}
								  	  onChange={(e)=>this.setState({lastNameError: ''})}
								  	  errorText={this.state.lastNameError}
								  	  ref="lastName"
								    />
								    <TextField
									  style={style.textField}
								      floatingLabelText="City*"
								      required
								      onBlur={(e)=>{
								      	 if (e.target.value==='') {this.setState({CityError: 'City Name is required'})}
								      	 	else {this.setState({CityError: ''})}

								      }}
								  	  onChange={(e)=>this.setState({CityError: ''})}
								  	  errorText={this.state.CityError}
								  	  ref="city"
								    />
								    <TextField
									  style={style.textField}
								      floatingLabelText="Province/State*"
								      required
								      onBlur={(e)=>{
								      	 if (e.target.value==='') {this.setState({provinceError: 'First Name is required'})}
								      	 	else {this.setState({provinceError: ''})}

								      }}
								  	  onChange={(e)=>this.setState({provinceError: ''})}
								  	  errorText={this.state.provinceError}
								  	  ref="province"
								    />
								    <TextField
									  style={style.textField}
								      floatingLabelText="Country*"
								      required
								      onBlur={(e)=>{
								      	 if (e.target.value==='') {this.setState({countryError: 'Country Name is required'})}
								      	 	else {this.setState({countryError: ''})}

								      }}
								  	  onChange={(e)=>this.setState({countryError: ''})}
								  	  errorText={this.state.countryError}
								  	  ref="country"
								    />
								    <TextField
									  style={style.textField}
								      floatingLabelText="Native Language*"
								      required
								      onBlur={(e)=>{
								      	 if (e.target.value==='') {this.setState({nativeLanguageError: 'You must specify your native language'})}
								      	 	else {this.setState({nativeLanguageError: ''})}

								      }}
								  	  onChange={(e)=>this.setState({nativeLanguageError: ''})}
								  	  errorText={this.state.nativeLanguageError}
								  	  ref="language"
								    />
								    <DatePicker hintText="Date Of Birth" style={style.textField} />
								    <CardTitle title="Experience" subtitle="For students this is not mandatory" />	
									<Divider />

									<TextField
									  style={style.textField}
								      floatingLabelText="Company"
								      ref="company"
								    />
								    <TextField
									  style={style.textField}
								      floatingLabelText="Designation"
								      ref="designation"
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
								      ref="responsibilities"
								    />

								    <CardTitle title="Education"/>	
									<Divider />
									<TextField
									  style={style.textField}
								      floatingLabelText="Institute*"
								      onBlur={(e)=>{
								      	 if (e.target.value==='') {this.setState({instituteError: 'Country Name is required'})}
								      	 	else {this.setState({instituteError: ''})}

								      }}
								  	  onChange={(e)=>this.setState({instituteError: ''})}
								  	  errorText={this.state.instituteError}
								  	  ref="institute"
								    />
								    <TextField
									  style={style.textField}
								      floatingLabelText="Degree*"
								      onBlur={(e)=>{
								      	 if (e.target.value==='') {this.setState({degreeError: 'Country Name is required'})}
								      	 	else {this.setState({degreeError: ''})}

								      }}
								  	  onChange={(e)=>this.setState({degreeError: ''})}
								  	  errorText={this.state.degreeError}
								  	  ref="degree"
								    /><br />
								    <label style={{margin: '10px',paddingLeft: '8%',float: 'left'}} >Duration: </label>
								    <DatePicker hintText="From" style={{width:'30%', marginLeft:'5%'}} ref="degreeFrom" />
								    <DatePicker hintText="To" style={{width:'38%', margin: '10px'}} ref="degreeTo" />	
								    <TextField
								      floatingLabelText="Details*"
								      multiLine={true}
								      rows={2}
								      style={{width: '84%'}}
								      floatingLabelStyle={{position:'relative', float: 'left'}}
								      onBlur={(e)=>{
								      	 if (e.target.value==='') {this.setState({detailError: 'Country Name is required'})}
								      	 	else {this.setState({detailError: ''})}

								      }}
								  	  onChange={(e)=>this.setState({detailError: ''})}
								  	  errorText={this.state.detailError}
								  	  ref="detail"
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
										      errorText={this.state.skillError}
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
								      floatingLabelText="Email*"
								      onBlur={(e)=>{
								      	 if (e.target.value==='') {this.setState({emailError: 'Country Name is required'})}
								      	 	else {this.setState({emailError: ''})}

								      }}
								  	  onChange={(e)=>this.setState({emailError: ''})}
								  	  errorText={this.state.emailError}
								  	  type="email"
								  	  ref="email"
								    />
								    <TextField
									  style={style.textField}
								      floatingLabelText="Address*"
								      onBlur={(e)=>{
								      	 if (e.target.value==='') {this.setState({addressError: 'Country Name is required'})}
								      	 	else {this.setState({addressError: ''})}

								      }}
								  	  onChange={(e)=>this.setState({addressError: ''})}
								  	  errorText={this.state.addressError}
								  	  ref="address"
								    />
								    <TextField
									  style={style.textField}
								      floatingLabelText="Mobile No"
								      onBlur={(e)=>{
								      	 if (e.target.value==='') {this.setState({mobileError: 'Country Name is required'})}
								      	 	else {this.setState({mobileError: ''})}

								      }}
								  	  onChange={(e)=>this.setState({mobileError: ''})}
								  	  errorText={this.state.mobileError}
								  	  ref="mobile"
								    />
								    <TextField
									  style={style.textField}
								      floatingLabelText="Facebook Profile URL"
								      ref="facebook"
								    />
								    <TextField
									  style={style.textField}
								      floatingLabelText="LinkedIn Profile URL"
								      ref="linkedin"
								    />
								    <TextField
									  style={style.textField}
								      floatingLabelText="Twitter Profile URL"
								      ref="twitter"
								    /><br />
								    <RaisedButton label="Submit" type="submit-property__content" primary={true} style={{margin:15}} />
								</form>
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
