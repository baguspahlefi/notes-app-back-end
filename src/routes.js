const { addNoteHandler, getAllNotesHandler, getNotesHandler, editNotesHandler, deleteNoteByIdHandler } = require("./handler");

const routes = [
    {
        method : 'POST',
        path : '/notes',
        handler : addNoteHandler,
    },
    {
        method : "GET",
        path : '/notes',
        handler : getAllNotesHandler
    },
    {
        method : "GET",
        path : "/notes/{id}",
        handler : getNotesHandler
    },
    {
        method : "PUT",
        path : "/notes/{id}",
        handler : editNotesHandler
    },
    {
        method: 'DELETE',
        path: '/notes/{id}',
        handler: deleteNoteByIdHandler,
    },
];


module.exports = routes;