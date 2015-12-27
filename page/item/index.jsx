var React = require('react');

 var Toast = React.createClass({
 
  getInitialState: function() {  
    return null;
  },
  
 
  render: function() { 

    var list=this.props.source; 
   var html = list.map(function(item) {
      return  <div  className="item"><img src={item.CoverImage} className="img"/><div className="classify">
                     <i className="g-icon-nature"></i><span className="name">{item.ThematicTypeName}</span></div>
                           <div className="title">{item.ThematicTitle}</div></div>
    }); 

     return (
      <div>{html}</div> 

    );
  }
});
 

module.exports = Toast