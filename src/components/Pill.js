import '../styles/pill.scss';

<<<<<<< HEAD
function Pill({content, className}) { 


  <div class="pill-nav">
  <a class="active" href="#home">Home</a>
  <a href="#news">News</a>
  <a href="#contact">Contact</a>
  <a href="#about">About</a>
</div>

//   /* Style the links inside the pill navigation menu */
// .pill-nav a {
//   display: inline-block;
//   color: black;
//   text-align: center;
//   padding: 14px;
//   text-decoration: none;
//   font-size: 17px;
//   border-radius: 5px;
// }

// /* Change the color of links on mouse-over */
// .pill-nav a:hover {
//   background-color: #ddd;
//   color: black;
// }

// /* Add a color to the active/current link */
// .pill-nav a.active {
//   background-color: dodgerblue;
//   color: white;
// }



=======
function Pill({content, className}) {
>>>>>>> b8c8d4cad7d1b7c4c593e3638427ae070ef9b269
    return (
      <div className={className} style="pill">
          {content}
      </div>
    );
  }

  export default Pill;