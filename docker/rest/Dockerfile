FROM ubuntu:focal

RUN apt-get update && \
    apt-get install -qy build-essential curl

ARG UID=1000
ARG GID=1000
ARG USERNAME=user
ARG HOME=/home/$USERNAME
RUN groupadd -g $GID $USERNAME && \
    useradd -m -s /bin/bash -u $UID -g $GID $USERNAME

ARG ARCH
RUN cd /tmp && \
    # node v16.16.0
    curl -sfSL -R -O "https://nodejs.org/dist/v16.16.0/node-v16.16.0-linux-$ARCH.tar.xz" && \
    tar Jxf node-v16.16.0-linux-$ARCH.tar.xz && \
    cd node-v16.16.0-linux-$ARCH && \
    cp -pR bin include lib share /usr/local

EXPOSE 3000

COPY ./docker/rest/entrypoint.sh /
RUN chmod +x /entrypoint.sh
CMD ["/entrypoint.sh"]

USER $USERNAME
WORKDIR /jsybuben-rest
