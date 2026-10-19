"""Copies agent/ (auth.md, .well-known/api-catalog) into the built site.

MkDocs would render auth.md as an HTML page and skips dot-directories, so these two files, which agents fetch as they
are, are copied after the build instead.
"""
import os
import shutil


def on_post_build(config, **kwargs):
    src = os.path.join(os.path.dirname(config["config_file_path"]), "agent")
    for root, _, files in os.walk(src):
        for name in files:
            dest = os.path.join(config["site_dir"], os.path.relpath(os.path.join(root, name), src))
            os.makedirs(os.path.dirname(dest), exist_ok=True)
            shutil.copyfile(os.path.join(root, name), dest)
