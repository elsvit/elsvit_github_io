var Note = React.createClass({
	render:function(){
		var noteStyle = {background: this.props.color};
		return (
			<div className = 'note' style={noteStyle}>
				<span className='delete-note' onClick={this.props.onDelete}> × </span>
				{this.props.text}
				{this.props.children}
			</div>
		);
	}
});

var NoteEditor = React.createClass({
	getInitialState: function(){
		return {
			text: '',
			bg: this.props.bgColors[0]
		};
	},
	handleTextareaChange: function(ev){
		this.setState({text:ev.target.value});
	},
	handleAddNote: function(){
		if(this.state.text != ''){
			var newNote = {
				text: this.state.text,
				color: this.state.bg,
				id: Date.now()
			};
			this.props.newNoteAdd(newNote)
			this.setState({text: ''});			
		}

	},
	handleChangeColor: function(colorBtn){
		this.setState({bg: colorBtn});
	},

	render: function(){
		var texareaStyle = {background: this.state.bg};
		var self = this;
		return (
			<div className = "note-editor">
				<textarea
					placeholder='Enter your note here'
					rows={5}
					className='note-editor-textarea'
					value={this.state.text}
					onChange={this.handleTextareaChange}
					style={texareaStyle}
				/>
        <div color-buttons>
				 {
          	this.props.bgColors.map(function (colorBtn) {
          		var btnColorStyle ={ background : colorBtn}; 
          		return (
          			<button 
								key = {colorBtn}
          			className = "color-button" 
          			onClick = {self.handleChangeColor.bind(self, colorBtn)} 
          			style = {btnColorStyle}
          			></button>			
          		);
          	})
          }
					<button className="add-button" onClick={this.handleAddNote}>Add</button>
				</div>
			</div>
		);
	}
});

var NotesGrid = React.createClass({
  componentDidMount: function() {
      var grid = this.refs.grid;
      this.msnry = new Masonry( grid, {
          itemSelector: '.note',
          columnWidth: 200,
          gutter: 10,
          isFitWidth: true
      });
  },

  componentDidUpdate: function(prevProps) {
      if (this.props.notes.length !== prevProps.notes.length) {
          this.msnry.reloadItems();
          this.msnry.layout();
      }
  },
	render: function(){
		var deleteNote = this.props.deleteNote;
		return(
			<div className = 'notes-grid' ref='grid'>
				{
					this.props.notes.map( function(note){
						return (
							<Note
								key = {note.id}
								onDelete = {deleteNote.bind(null, note)}
								color = {note.color}
								text={note.text}>
								 :-)
							</Note>
						);
					})
				}
			</div>
		);
		
	}
});
var NotesApp = React.createClass({
	getDefaultProps: function () {
		return {
			bgColors : [
				'snow',
				'seashell',
				'mistyrose',
				'coral',
				'yellow',
				'greenyellow',
				'lightgreen',
				'aquamarine',
				'skyblue',
				'lightgrey'
			]
		};
	},
	getInitialState: function(){
		return {
			notes: []
		};
	},
	componentDidMount: function(){
		var localNotes = JSON.parse(localStorage.getItem('notes'));
		if(localNotes){
			this.setState({notes: localNotes});
		}
	},
	componentDidUpdate: function () {
		this._updateLocalStorage();
	},
	handleAddNote: function(newNote){
		var newNotes = this.state.notes.slice();
		newNotes.unshift(newNote);
		this.setState({notes:newNotes});
	},
	handleDeleteNote: function(deleteNote){
		var deleteNoteId = deleteNote.id;
		var newNotes = this.state.notes.filter(function(note){
			return note.id !== deleteNoteId;
		});
		this.setState({notes:newNotes});
	},
	render: function(){
		return (
			<div className = 'notes-app'>
				<NoteEditor newNoteAdd = {this.handleAddNote} bgColors = {this.props.bgColors}/>
				<NotesGrid notes = {this.state.notes} deleteNote={this.handleDeleteNote} />
			</div>
		);
	},
	_updateLocalStorage: function () {
		var notes = JSON.stringify(this.state.notes);
		localStorage.setItem('notes', notes);
	}

});
ReactDOM.render(
	<NotesApp/>,
	document.getElementById('notes-mount-point')
);