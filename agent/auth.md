# auth.md: www.eddy3d.com

**Audience:** AI agents and automated clients.

**No authentication.** This is a public website: Eddy3D's product page, downloads, release notes and publications. It needs no
account, key or token, and it has no API of its own. There is no registration or provisioning endpoint and no OAuth server, so
there is no protected-resource or authorization-server metadata to publish.

## How to use it

- Send plain `GET` requests. Honour [`/robots.txt`](https://www.eddy3d.com/robots.txt) and its content signals, and identify yourself
  with a descriptive `User-Agent`.
- The documentation is at <https://docs.eddy3d.com/>. The one public data API of the project, the AIJ wind-benchmark data, is at
  <https://aij.eddy3d.com/api/> and needs no credentials either; it is listed in
  [`/.well-known/api-catalog`](https://www.eddy3d.com/.well-known/api-catalog).

## Contact

<https://github.com/Eddy3D-Dev/Eddy3D-Website/issues>
