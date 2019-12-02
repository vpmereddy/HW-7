/* Name:Venkat Pranay Reddy Mereddy
  Course name: GUI I
  File type: .js file
  Sources used: https://www.w3schools.com/css
  */

$.validator.addMethod( "greaterThan", function( value, element, param ) {
  var target = $( param );

  if ( this.settings.onfocusout && target.not( ".validate-greaterThan-blur" ).length ) {
      target.addClass( "validate-greaterThan-blur" ).on( "blur.validate-greaterThan", function() {
          $( element ).valid();
      } );
  }
  return Number(value) >= Number(target.val());

});

/* This will assist in checking if the values entered are decimals .  */
$.validator.addMethod("noDecimal", function(value, element) {
    return !(value % 1);
}, "Provide integer ONLY");

/* the following fucntion makes rules for the input entered by the user. */
jQuery.validator.addClassRules("numberinput", {
    required: true,
    number: true
});


$(function() {
  $("#forminput").validate({
    rules: {
      /*This makes rules */
      start_horizontal1: {noDecimal: [start_horizontal1, start_horizontal1]},
      start_vertical1: {noDecimal: [start_vertical1, start_vertical1]},


      end_horizontal2: {
        noDecimal: [end_horizontal2, end_horizontal2],
        greaterThan: [start_horizontal1, start_horizontal1]
      },


      end_vertical2: {
        noDecimal: [end_vertical2, end_vertical2],
        greaterThan: [start_vertical1, start_vertical1]
      }
    },

    /* the function below helps in generating error massesages or it will use jquery plugs*/
    messages: {
      start_horizontal1: {required: "Enter beginning value"},
      start_vertical1: {required:"Enter beginning value"},


      end_horizontal2: {
        required: "Enter end value",
        greaterThan: "Enter Bigger number than horizontal start "
      },


      end_vertical2: {
        required: "Enter end value",
        greaterThan: "Enter Bigger number than  vertical start "
      }
    },

    //if all condition passed the table will generate
    submitHandler: function(form){
      maketable();
    }
  });
});
/*conversion of the numbers takes place here*/
function maketable() {
var horz1 = Number(document.getElementById("start_horizontal1").value);
var horz2 = Number(document.getElementById("end_horizontal2").value);
var vertical1 = Number(document.getElementById("start_vertical1").value);
var vertical2 = Number(document.getElementById("end_vertical2").value);

//this hadles error and checks if row and horizonatal 1 values are less than their end values
//this will create multiplication table using the logic written below according to the needs of the user
   var tableresult="<tr><th> </th>";
 for(var m = horz1; m <= horz2; m++){
 tableresult += "<th>" + m + "</th>";
}
 tableresult += "</tr>";
for(var n = vertical1; n <= vertical2; n++) {
 tableresult += "<tr><th>" + n + "</th>";
 for(var p = horz1; p <= horz2; p++) {
 tableresult += "<td>" + n*p + "</td>";
 }
     tableresult += "</tr>";
   }

    var table = document.getElementById("mult_Table").innerHTML = tableresult;

  }
