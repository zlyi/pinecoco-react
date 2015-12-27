'use strict';

require('../css/style.css');

 
var Toast = require('../components/toast/test');

var Alert = require('../components/alert/index');

var Switch = require('../components/switch/index');

var Radio = require('../components/radio/index');


 var React = require('react');

  var App = React.createClass({
  
   getInitialState:function() {
    return { alertIsShow: null ,toastIsShow:null};
  },
    showAlert:function(evt){
    	      evt&&evt.preventDefault();

    this.setState({
      alertIsShow: true
    }); 
      },
  showToast:function(evt) {
  	      evt&&evt.preventDefault();
 
   this.setState({
      toastIsShow: true
    });
  }, 
  render: function() {
       console.log(JSON.stringify(this.state));
     return (
      <div>
             <div onClick={this.showAlert}>Alert</div>
<div  onClick={this.showToast}>Toast</div> 

  <Alert isShow={this.state.alertIsShow} message="警告"  /><br/><br/>

             <Toast isShow={this.state.toastIsShow} message="提示"  duration="2000" /><br/><br/>
 
 		    <Radio isSelected="false"/>

 		    <Switch isSelected="false"/>
        </div> 
    );
  }
});

      React.render(
          <App/>,
        document.body
      );

   /*
 var  App = React.createClass({
  getInitialState:function() {
    return { alertIsShow: false ,toastIsShow:false};
  },
  showAlert:function(){
    this.setState({
      alertIsShow: true
    });
  },
  showToast:function() {
   this.setState({
      toastIsShow: true
    });
  }, 
  render:function() {
    return <div>
<div onClick={this.showAlert}>Alert<div>
<div  onClick={this.showToast}>Toast<div> 


     <Alert isShow={this.state.alertIsShow} message="警告"  /><br/><br/>

             <Toast isShow={this.state.toastIsShow} message="提示" duration="2000" /><br/><br/>
 
 		    <Radio isSelected="false"/>

 		    <Switch isSelected="false"/>
    </div>;
  }
});

React.render(<App />, document.body)*/
