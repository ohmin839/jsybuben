FROM node:16.16.0

COPY ./docker/core/entrypoint.sh /
RUN chmod +x /entrypoint.sh
CMD ["/entrypoint.sh"]

USER node
WORKDIR /jsybuben
