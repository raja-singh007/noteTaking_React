import React from 'react';
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import SaveIcon from "@material-ui/icons/Save";
import './NoteApp.css'


class NoteApp extends React.Component {

  constructor(props){
    super(props)
    this.state={
      // date : new Date(),
      items : []
    }
    this.editNote = this.editNote.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
    this.addNote = this.addNote.bind(this);
  }
  addNote(event){
    event.preventDefault();
    console.log("add button clicked")
    console.log(this.theTitle.value)
    console.log(this.selectedDate.value)
      if(this.theTitle.value !== "") {
        var newNote = {
          title : this.theTitle.value,
          note : this.theNote.value,
          date : this.selectedDate.value
        };
      
      console.log(newNote)
      this.setState((prevState)=>{
        return{
          items : prevState.items.concat(newNote)
        };
      });
      console.log(this.state.items);
      this.theNote.value = "";
      this.theTitle.value = "";
    }
  }
  deleteNote(event){
    event.preventDefault();
    console.log("delete button clicked");

    this.theNote.value = "";
    this.theTitle.value = "";
  }
  editNote(event){
    // event.preventDefault();
    console.log("event button clicked");
    console.log(event)
    this.theNote.value = "";
    this.theTitle.value = "";
  }

  render(){
    let itemNote = this.state.items;
   return(
     <div className="root">
       <h1 className="header">NoteTAkingApp</h1>
       <TextField
          id="date"
          label="Date"
          type="date"
          defaultValue={new Date()}
          className="textField"
          required={true}
          InputLabelProps={{
            shrink: true
          }}
          inputRef={(sdate)=>{this.selectedDate = sdate}}
        />
        <div>
          <ol>
            {
            itemNote.map((val)=><li>
              <Paper className="paper">
                <h3>title:{val.title}</h3>
                <Button variant="contained" onClick={this.editNote(val)}>Edit</Button>
                </Paper></li>)}
          </ol>
        </div>
        <footer>
          <Grid container spacing = {2}>
          <Grid item xs={6}>
        <Paper className="paper">
        <TextField
                className="note"
                id="outlined-full-width"
                // style={{ margin: 8 }}
                value="Add Note"
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true
                }}
              />
     <TextField
                id="outlined-full-width"
                label="Title"
                type="text"
                // style={{ margin: 8 }}
                placeholder="Add Note Title"
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true
                }}
                required={true}
                variant="outlined"
                inputRef={(title)=> {this.theTitle = title}}
                
              />
       <TextField
                label="Content"
                id="outlined-margin-dense"
                type="text"
                // style={{ margin: 8 }}
                fullWidth
                multiline
                helperText="Some important text"
                margin="dense"
                inputRef = {(note)=> {this.theNote = note}}
                variant="outlined"
              />
      <Button onClick={this.addNote}
      variant="contained"
      color="primary"
      size="small"
      className="button"
      style={{ margin: 8 }}
      startIcon={<SaveIcon />}>Save</Button>
      <Button onClick ={this.deleteNote}
              variant="contained"
              color="secondary"
              size="small"
              className="button"
              style={{ margin: 8 }}
              startIcon={<DeleteIcon />}
            >
              Discard
            </Button>
      </Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper className="paper">
     <TextField
                className="note"
                id="outlined-full-width"
                // style={{ margin: 8 }}
                value="Edit Note"
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true
                }}
              /> 
      <TextField
                id="outlined-full-width"
                label="Title"
                type="text"
                // style={{ margin: 8 }}
                placeholder="Add Note Title"
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true
                }}
                variant="outlined"
                defaultValue = {itemNote.title}
                
              />
       <TextField
                label="Content"
                id="outlined-margin-dense"
                type="text"
                // style={{ margin: 8 }}
                fullWidth
                multiline
                helperText="Some important text"
                margin="dense"
                defaultValue={itemNote.note}
                variant="outlined"
              />
      <Button onClick={this.addNote}
      variant="contained"
      color="primary"
      size="small"
      className="button"
      style={{ margin: 8 }}
      startIcon={<SaveIcon />}>Save</Button>
      <Button onClick ={this.deleteNote}
              variant="contained"
              color="secondary"
              size="small"
              className="button"
              style={{ margin: 8 }}
              startIcon={<DeleteIcon />}
            >
              Discard
            </Button>
        </Paper>
      </Grid>
      </Grid>
      </footer>

     </div>
   );
  }
}
export default NoteApp;