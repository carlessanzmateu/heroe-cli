#!/usr/bin/env node

const program = require( 'commander' );
const { prompt } = require( 'inquirer' );
const { sayHello, copyMessage } = require( './logic' );
const { listActions, actionsHandler } = require( './actions.controller' );

program
    .version( '0.1.0' )
    .description( 'Hero generator' );

program
    .command( 'start' )
    .alias( 's' )
    .description( 'Start process for hero generator' )
    .action(() => {
        let action = listActions();
        actionsHandler( action );
    });

program
    .command( 'talk <message>' )
    .alias( 't' )
    .description( 'Silly conversation generator' )
    .action( message => {
        const answer = copyMessage( message );

        console.log( answer );
    });

program.parse( process.argv )
