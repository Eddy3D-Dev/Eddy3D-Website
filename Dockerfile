FROM squidfunk/mkdocs-material

# ---- system packages ----------------------------------------------------
RUN apk add --no-cache \
      bash \
      pandoc        # <-- this is the missing binary
# -------------------------------------------------------------------------

# ---- Python packages ----------------------------------------------------
RUN pip install --no-cache-dir \
      mkdocs-multirepo-plugin \
      mkdocs-git-revision-date-localized-plugin \
      mkdocs-minify-plugin \
      mkdocs-git-authors-plugin \
      mkdocs-git-committers-plugin-2 \
      mkdocs-title-casing-plugin \
      mkdocs-glightbox \
      markdown-include \
      mkdocs-redirects \
      mkdocs-video \
      mkdocs-awesome-pages-plugin \
      mkdocs-bibtex \
      mkdocs-section-index \
      mkdocs-include-markdown-plugin\
# -------------------------------------------------------------------------