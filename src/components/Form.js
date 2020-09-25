import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';

import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Button from '@material-ui/core/Button';
import FormHelperText from '@material-ui/core/FormHelperText';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { CardContent,Card } from '@material-ui/core';

import '../App.css';


export default class Form extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              Name:'',
              ErrorName:'',
              RednameError:'',
              Surname:'',
              ErrorSurname:'',
              RedSurname:'',
              phNO:'',
              ErrorPho:'',
              RedPhoneError:'',
              email:'',
              Erroremail:'',
              RedEmailError:'',
              Age:'',
              ErrorAge:'',
              RedAgeError:'',
              Gender:'',
              ErrorGender:'',
              Gerror:'',
              Date_birth:'',
              Derror:'',
              ErrorDate:''



         }
     }
     NameChange=(e)=>{
        if(e.target.value.length<=0){
            this.setState({
                ErrorName:"don't leave this field",
                RednameError:Boolean(true),
            })
        }else{
            this.setState({
                ErrorName:"",
                RednameError:Boolean(false),

            })

        }
        this.setState({
            Name:e.target.value
        })
     }
     SurnameChange=(e)=>{
        if(e.target.value.length<=0){
            this.setState({
                ErrorSurname:"don't leave this field",
                RedSurname:Boolean(true)
            })
        }else{
            this.setState({
                ErrorSurname:'',
                RedSurname:Boolean(false)

            })

        }
        this.setState({
            Surname:e.target.value
        })
     }
     phNOChange=(e)=>{
        if(e.target.value.length<=0){
            this.setState({
                ErrorPho:"don't leave this field",
                RedPhoneError:Boolean(true)


            })
        }else{
            this.setState({
                ErrorPho:'',
                RedPhoneError:Boolean(false)

            })

        }
        this.setState({
            phNO:e.target.value
        })
     }
     emailChange=(e)=>{
        if(e.target.value.length<=0){
            this.setState({
                Erroremail:"don't leave this field",
                RedEmailError:Boolean(true)


            })
        }else{
            this.setState({
                Erroremail:'',
                RedEmailError:Boolean(false)

            })

        }
        this.setState({
            email:e.target.value
        })
     }
     DateChange=(e)=>{
        if(e.target.value.length<=0){
            this.setState({
                ErrorDate:"don't leave this field",
                Derror:Boolean(true)


            })
        }else{
            this.setState({
                ErrorDate:'',
                Derror:Boolean(false)

            })

        }
        this.setState({
            Date_birth:e.target.value
        })
     }
     AgeChange=(e)=>{
        if(e.target.value.length<=0){
            this.setState({
                ErroreAge:"don't leave this field",
                RedAgeError:Boolean(true)


            })
        }else{
            this.setState({
                ErroreAge:'',
                RedAgeError:Boolean(false)

            })

        }
        this.setState({
            Age:e.target.value
        })
     }
     GenderChange=(e)=>{
        if(e.target.value.length<=0){
            this.setState({
                ErroreGender:"don't leave this field",
                Gerror:Boolean(true)


            })
        }else{
            this.setState({
                ErroreGender:'',
                Gerror:Boolean(false)

            })

        }
        this.setState({
            Gender:e.target.value
        })
     }
     FormValid =()=>{
        const {Name,Surname,phNO,email,Age,Gender,Date_birth}=this.state
        console.log(Gender,"printing")
        if (Name.length<=0 && Surname.length<=0 && phNO.length<=0 && email.length<=0 && Age.length<=0 && Gender.length<=0)
        {
            console.log("valid checking")
            this.setState({
                ErrorName:"Dont'leave this feild",
                ErrorSurname:"Dont'leave this feild",
                ErrorPho:"Dont'leave this feild",
                Erroremail:"Dont'leave this feild",
                ErroreAge:"Dont'leave this feild",
                ErroreGender:"Dont'leave this feild",
                ErrorDate:"Don't leave this feild",
                RednameError:Boolean(true),
                Gerror:Boolean(true),
                RedAgeError:Boolean(true),
                RedEmailError:Boolean(true),
                RedPhoneError:Boolean(true),
                RedSurname:Boolean(true),
                Derror:Boolean(true),

            })
            return false

        }
        var phoneno = /^\d{10}$/;
        console.log(phNO)
        if (!phNO.match(phoneno)) {
            console.log(phNO,"trueeeeeeeeeeeeee")
            this.setState({
                ErrorPho:"please enter your 10 digits mobile number",
                RedPhoneError:Boolean(true)
            })
            return false
        }
        if(!email.includes("@") || !email.includes('.')){
            this.setState({
                Erroremail:"please enter valid email",
                RedEmailError:Boolean(true),

            })
            return false

        }
        if (Name===Surname){
            this.setState({
             ErrorSurname:"don't write same name in these field"
                
            })
            return false
        }
        if (Age.length===0){
            this.setState({
                ErroreAge:"select your age"
            })
            return false
        }
        if (Gender.length===0){
            this.setState({
                ErroreGender:"select your gender"
            })
            return false
        }
        else if(Name.length>0){
            console.log("else if")
            this.setState({
                ErrorName:"",
                RednameError:Boolean(false),
            })
            return true

        }
        else if(Surname.length>0){
           this.setState({
               ErrorSurname:'',
               RedSurname:Boolean(false)
           })
           return true
        }
        else if(phNO.length>0){
                console.log("for phone numbers")
                this.setState({
                    ErrorPho:"plase enter only 0 to 9",
                    RedPhoneError:Boolean(true)

                })
                return false
               
        }
        else if(email.length>0){
            console.log("else iffffffffffffff")
            this.setState({
                Erroremail:"",
                RedEmailError:Boolean(false),
            })
            return false
        }
        else if(Date_birth.length>0){
            console.log("else iffffffffffffff")
            this.setState({
                ErrorDate:"",
                Derror:Boolean(false),
            })
            return false
        }
        else{
            console.log("it is else")
            this.setState({
                ErrorName:"",
                ErrorSurname:"",
                ErrorPho:"",
                Erroremail:"",
                ErroreAge:'',
                ErroreGender:'',
                ErrorDate:'',
                RednameError:Boolean(false),
                RedAgeError:Boolean(false),
                RedEmailError:Boolean(false),
                RedPhoneError:Boolean(false),
                RedSurname:Boolean(false),
                Gerror:Boolean(false),
                Derror:Boolean(false),

            })
            return false  
        }
    }

     HandletheForm= (e) =>{
        const {Name,Surname,phNO,email,Age,Gender,Date_birth}=this.state
        e.preventDefault();
         console.log("hello")
         if(this.FormValid()){
             console.log("hello thus is for true")
            alert(`your details is 
           your name: ${Name}
           your last name: ${Surname}
            your Age:${Age}
            your phone no: ${phNO}
            your email : ${email}
            Date of birth:${Date_birth}
            sex: ${Gender} 
            successfully submitted
            Thank you for using my form!!!!!!!`)
         }
        

    }
     render() {
      
         return (
            <div className="firstdiv">  
            <Grid container spacing={3}>
                <Grid item xs={4}>

                </Grid>
            <Card className="card1" >   
            <h1 style={{color:"rgb(0,128,255)"}}>Form Validation</h1>
                    <CardContent className="cardItems">
                    <Grid item xs={12}>
                        <FormControl fullWidth={true} variant="outlined" 
                         onChange={this.NameChange} onFocus={this.NameChange} >
                            <InputLabel htmlFor="component-outlined">First Name</InputLabel>
                            <OutlinedInput id="outlined" 
                            value={this.state.Name} 
                            name="Name"
                            label="FirstName"
                            error={Boolean(this.state.RednameError)}
                            />
                            
                        <FormHelperText id="component-error-text"  style={{color:'red'}} >{this.state.ErrorName}</FormHelperText>
                        <br />
                        
                        </FormControl>
                    </Grid>

                    <Grid item xs={12}>
                        <FormControl fullWidth variant="outlined">
                            <InputLabel htmlFor="component-outlined">Last Name</InputLabel>
                            <OutlinedInput id="outlined" 
                            value={this.state.Surname} 
                            name="Surname"
                            label="Last Name"
                            error={Boolean(this.state.RedSurname)}
                            onChange={this.SurnameChange}  onFocus={this.SurnameChange} />
                            
                        <FormHelperText id="component-error-text" style={{color:'red'}} >{this.state.ErrorSurname}</FormHelperText>
                        <br />
                        </FormControl>
                    </Grid>

                    <Grid item xs={12}>
                        <FormControl fullWidth variant="outlined"
                         onChange={this.phNOChange} onFocus={this.phNOChange} >
                            <InputLabel htmlFor="component-outlined">mobile number</InputLabel>
                            <OutlinedInput id="outlined" 
                            value={this.state.phNO} 
                            name="phNO"
                            label="mobile number"
                            error={Boolean(this.state.RedPhoneError)}
                           />
                            
                        <FormHelperText id="component-error-text"  style={{color:'red'}} >{this.state.ErrorPho}</FormHelperText>
                    <br />
                        </FormControl>
                    </Grid>

                    <Grid item xs={12}>
                        <FormControl fullWidth variant="outlined"
                         onChange={this.emailChange} onFocus={this.emailChange} >
                            <InputLabel htmlFor="component-outlined">email</InputLabel>
                            <OutlinedInput id="outlined" 
                            value={this.state.email} 
                            name="email"
                            type="text"
                            label="email"
                            error={Boolean(this.state.RedEmailError)}
                            />
                            
                        <FormHelperText id="component-error-text"  style={{color:'red'}} >{this.state.Erroremail}</FormHelperText>
                        <br />
                        </FormControl>
                        </Grid>
                    <Grid item xs={12}>
                    <FormControl fullWidth variant="outlined" 
                        onChange={this.DateChange} onFocus={this.DateChange}>
                    <InputLabel htmlFor="component-outlined">date of birth</InputLabel>
                    <OutlinedInput
                            id="date"
                            type="date"
                            label="date of birth"
                            inputlabelprops={{
                            shrink: true,
                            }}
                            error={Boolean(this.state.Derror)}
                        />
                        <FormHelperText id="component-error-text"  style={{color:'red'}}>{this.state.ErrorDate}</FormHelperText>
                        <br />
                   
                    </FormControl>
                    </Grid>

                    <Grid item xs={12}>

                    <FormControl fullWidth variant="outlined" style={{width:100}}
                                >
                                <InputLabel id="demo-simple-select-outlined-label">Age</InputLabel>
                                <Select
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                value={this.state.Age} 
                                label="Age"
                                error={Boolean(this.state.RedAgeError)}
                                onChange={this.AgeChange}

                                >
                                <MenuItem value="">
                                    none
                                </MenuItem>
                                <MenuItem value='18'>18</MenuItem>
                                <MenuItem value='19'>19</MenuItem>
                                <MenuItem value='20'>20</MenuItem>
                                <MenuItem value='21'>21</MenuItem>
                                <MenuItem value='22'>22</MenuItem>
                                <MenuItem value='23'>23</MenuItem>
                                <MenuItem value='24'>24</MenuItem>
                                <MenuItem value='25'>25</MenuItem>
                                <MenuItem value='26'>26</MenuItem>
                                <MenuItem value='27'>27</MenuItem>
                                <MenuItem value='28'>28</MenuItem>
                                <MenuItem value='28'>29</MenuItem>
                                <MenuItem value='28'>30</MenuItem>
                                </Select>
                            

                        <FormHelperText id="component-error-text" style={{color:'red'}} >{this.state.ErroreAge}</FormHelperText>
                        <br />
                            
                            </FormControl>
                    </Grid>

                    <Grid item xs={12}>
                    <FormControl fullWidth variant="outlined" style={{width:100}}
                                >
                                <InputLabel id="demo-simple-select-outlined-label">gender</InputLabel>
                                <Select
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                value={this.state.Gender} 
                                label="Gender"
                                error={Boolean(this.state.Gerror)}
                                onChange={this.GenderChange}

                                >
                                <MenuItem value="trans">
                                    Trans
                                </MenuItem>
                                <MenuItem value='Male'>Male</MenuItem>
                                <MenuItem value='Female'>Female</MenuItem>
                                </Select>
                            
                        <FormHelperText id="component-error-text" style={{color:'red'}} >{this.state.ErroreGender}</FormHelperText>
                        <br />
                            </FormControl>
                 
                    </Grid>
                    
                    <Grid item xs={12}>
                    <Button variant="contained" color="secondary"  onClick={this.HandletheForm}>Submit</Button>
                    </Grid>
                    </CardContent>
                </Card>
                </Grid>

           
            </div>
        )
    }
}
























