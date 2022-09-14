FROM ubuntu:focal

RUN apt-get update && \
    apt-get install -qy build-essential curl

ARG UID=1000
ARG GID=1000
ARG USERNAME=user
RUN groupadd -g $GID $USERNAME && \
    useradd -m -s /bin/bash -u $UID -g $GID $USERNAME

ARG ARCH
ARG NODE_VERSION
RUN cd /tmp && \
    # node
    curl -sfSL -R -O "https://nodejs.org/dist/$NODE_VERSION/node-$NODE_VERSION-linux-$ARCH.tar.xz" && \
    tar Jxf node-$NODE_VERSION-linux-$ARCH.tar.xz && \
    cd node-$NODE_VERSION-linux-$ARCH && \
    cp -pR bin include lib share /usr/local

COPY ./docker/client/entrypoint.sh /
RUN chmod +x /entrypoint.sh
CMD ["/entrypoint.sh"]

USER $USERNAME
WORKDIR /jsybuben-client
