CREATE DATABASE appdb;

\c appdb;

CREATE SCHEMA appschema;

CREATE ROLE appuser WITH LOGIN password 'passw0rd';

GRANT ALL PRIVILEGES ON SCHEMA appschema TO appuser;
