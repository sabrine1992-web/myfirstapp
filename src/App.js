import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
function App() {
  return (
    <div className="App container">
      <div class="row">
       <  div class="col-4"></div>

        <div class="col-4">
        <form>

          <h1> formulaire d'utilisateur</h1>
          <div class="form-group">
            <label for="exampleInputpass">Nom</label>
            <input type="name" class="form-control" id="exampleInputPassword1" placeholder="entre votre Nom"></input>
            <label for="exampleInputpass">Prémon</label>
            <input type="name" class="form-control" id="exampleInputPassword1" placeholder="entre votre Premon"></input>
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            <div classname="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"></input>
            </div><label for="exampleInputpass">Telephone</label>
            <input type="numbre" class="form-control" id="exampleInputPassword1" placeholder="Entre votre numéro de téléphone"></input>
            <label for="exampleInputpass">Date de naissance </label>
            <input type="date" class="form-control" id="exampleInputPassword1" placeholder="Entre votre numéro de téléphone"></input>
            <div classname="form-check">
              <input type="checkbox" class="form-check-input" id="exampleCheck1" />
              <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
          </div>

          <Button>Submit</Button>
          </form>

          </div>
        
        <div class="col-4"></div>
        </div>
</div>


  );
}
export default App;
