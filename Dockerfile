# OS
FROM ubuntu:focal

RUN apt-get update \
    && apt-get install -qy build-essential curl

ARG USERNAME=user
ARG GROUPNAME=user
ARG UID=1000
ARG GID=1000
ARG HOME=/home/$USERNAME
RUN groupadd -g $GID $GROUPNAME \
    && useradd -m -s /bin/bash -u $UID -g $GID $USERNAME

USER $USERNAME
WORKDIR $HOME

RUN (test -d $HOME/.local || mkdir $HOME/.local) \
    && (test -d Downloads || mkdir Downloads) \
    && cd Downloads \
    # node v16.16.0
    && curl -sfSL -R -O https://nodejs.org/dist/v16.16.0/node-v16.16.0-linux-x64.tar.xz \
    && tar Jxf node-v16.16.0-linux-x64.tar.xz \
    && cd node-v16.16.0-linux-x64 \
    && cp -pR bin include lib share $HOME/.local/

