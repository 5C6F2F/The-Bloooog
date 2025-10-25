FROM ubuntu:22.04

ENV DEBIAN_FRONTEND=noninteractive

RUN apt update && \
    apt install -y tzdata locales-all && \
    ln -sf /usr/share/zoneinfo/Asia/Tokyo /etc/localtime && \
    apt clean

RUN apt update && \
    apt install -y language-pack-ja-base language-pack-ja && \
    locale-gen ja_JP.UTF-8 && \
    echo export LANG=ja_JP.UTF-8 >> ~/.profile

# denoのインストール
RUN apt update && \
    apt install -y curl p7zip-full && \
    curl -fsSL https://deno.land/install.sh | sh && \
    apt clean && \
    rm -rf /var/lib/apt/lists/*

ENV PATH=/root/.deno/bin:$PATH

# nodejsのインストール
RUN apt update && \
    apt install -y nodejs npm && \
    apt clean

# textlintのインストール
WORKDIR /blog

RUN npm install --global \
    textlint \
    textlint-rule-preset-jtf-style \
    textlint-rule-spellcheck-tech-word \
    textlint-rule-common-misspellings \
    textlint-rule-preset-ja-technical-writing \
    @textlint-ja/textlint-rule-preset-ai-writing \
    textlint-filter-rule-allowlist \
    textlint-plugin-latex2e && \
    # npmのキャッシュを削除
    npm cache clean --force
