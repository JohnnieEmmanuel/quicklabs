import { Component, OnInit } from '@angular/core';
import{ init } from 'emailjs-com';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
init("user_BcYS7vyRHE1xzTtcMPuT0");
@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})

export class LandingpageComponent implements OnInit {
  name: string='';
  email: string='';
  message: string='';
 

//   public sendEmail() {
   
// init("user_E1TgGTK0OqgfHP2W1qDUk");

//     var templateParams={
//       username: "JOHNNIE",
//       companyname: "The Vex Company",
//       usermail: "udomajohn21@gmail.com",
      
//       resetcode: "12345"
//     }
    
//     emailjs.send("service_mx12hep","quicklabsWelcome", templateParams)
//     .then(function(response) {
//       console.log('SUCCESS!', response.status, response.text);
//     }, function(error) {
//       console.log('FAILED...', error);
//     });
     

      
//       emailjs.send("service_mx12hep","quicklabsResetPassword", templateParams)
//       .then(function(response) {
//         console.log('SUCCESS!', response.status, response.text);
//       }, function(error) {
//         console.log('FAILED...', error);
//       });
//         }


  constructor() { }

  ngOnInit(): void {
  }

   /**
   * Process the form we have. Send to whatever backend
   * Only alerting for now
   */
    processForm() {
      const allInfo = `My name is ${this.name}. My email is ${this.email}. My message is ${this.message}`;
      alert(allInfo); 
      if(confirm(allInfo)){
        
      var templateParams={
        username: this.name,
        usermail: this.email,
        message: this.message
        
      }
      
      emailjs.send("service_5l33qre","quicklabsContactUs", templateParams)
      .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);

        if(confirm('message sent. You will be contacted soon.')){
          window.location.reload();
        }
      }, function(error) {
        console.log('FAILED...', error);
      });

      }
       
      
    }
  
  toAbout(){
    document.getElementById("business-plan")?.scrollIntoView({behavior:"smooth"});
 
  }
  toPricing(){
    document.getElementById("pricing")?.scrollIntoView({behavior:"smooth"});
  }
  toFeatures(){
    document.getElementById("features")?.scrollIntoView({behavior:"smooth"});
  }
  toTestimonial(){
    document.getElementById("team")?.scrollIntoView({behavior:"smooth"});
  }
  toContact(){
    document.getElementById("contact")?.scrollIntoView({behavior:"smooth"});
  }

  
   date = new Date;
  c_year = this.date.getFullYear();

  //carrying out the mailing part for contact us section
  
  


         
    

    
}



