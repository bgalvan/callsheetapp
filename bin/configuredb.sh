#!/bin/bash

export PGPASSWORD='node_password'

database="callssdb"

echo "Configuring database: " + database

dropdb -U node_user callssdb
createdb -U node_user callssdb

psql -U node_user callsdb < ./bin/sql/calls.sql

echo "$database configured"
