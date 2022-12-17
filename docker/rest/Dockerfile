FROM node:18.12.1-bullseye-slim

ARG UID=1001
ARG GID=1001
ARG USERNAME=user
RUN groupadd -g $GID $USERNAME && \
    useradd -m -s /bin/bash -u $UID -g $GID $USERNAME

EXPOSE 8888

COPY ./docker/rest/entrypoint.sh /
RUN chmod +x /entrypoint.sh
CMD ["/entrypoint.sh"]

USER $USERNAME
WORKDIR /jsybuben-rest
