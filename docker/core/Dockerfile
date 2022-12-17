FROM node:18.12.1-bullseye-slim

ARG UID=1001
ARG GID=1001
ARG USERNAME=user
RUN groupadd -g $GID $USERNAME && \
    useradd -m -s /bin/bash -u $UID -g $GID $USERNAME

COPY ./docker/core/entrypoint.sh /
RUN chmod +x /entrypoint.sh
CMD ["/entrypoint.sh"]

USER $USERNAME
WORKDIR /jsybuben-core
