import React ,{ Component } from "react";
import {hot} from "react-hot-loader";

class MailContent extends Component{
    constructor(){
        super();
        this.state={
          mails: []
        }
      }
    
      componentDidMount(){
        fetch('http://localhost:5000/mails')
        .then(res => res.json())
        .then(mails => this.setState({mails}));
      } 

      openEmail() {
          if(this.state.mails.id === 0){
              return "";
          }else{
              return "Fails";
          }
      }

    render(){
        const {mails} = this.state;

        return(
            <div>
                <div>
                    <button className="button-danger">
                        Delete
                    </button>
                    <button className="button-normal">
                        Spam
                    </button>
                    <button className="button-info">
                        Mark as unread
                    </button>
                </div>
                
                <hr></hr>

                {mails.map(mail =>
                <div >
                    <h6>{mail.date}</h6>
                    <h1>{mail.subject}</h1>
                    <p>From: {mail.from}</p>
                    <p>To: {mail.to}</p>
                    <p>Message: {mail.body}</p>
                
                </div>
                )}
            </div>
        );
    }
}

export default hot(module)(MailContent);