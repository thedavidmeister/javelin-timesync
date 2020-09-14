let
nix-shell-release-tag = "7ec672ca3aaeb6c4b8fbc416a94c778887bddfe7";
nix-shell-release-sha256 = "147xvybp8r85xiyzmaww4m21i6a17fdkz6ygvhqigjsbpwq9qg4v";

nix-shell = import (fetchTarball {
 url = "https://github.com/thedavidmeister/nix-shadow-cljs/tarball/${nix-shell-release-tag}";
 sha256 = "${nix-shell-release-sha256}";
});
# holonix = import ../holonix;
in
with nix-shell.pkgs;
{
core-shell = stdenv.mkDerivation (nix-shell.shell // {
 name = "core-shell";

 shellHook = nix-shell.pkgs.lib.concatStrings [''
 export PATH=$PATH:$( npm bin )
 npm install
 shadow-cljs compile index
 ''
 nix-shell.shell.shellHook
 ];

 buildInputs = []
  ++ [
   (pkgs.writeShellScriptBin "deploy-to-npm" ''
    rm -rf dist
    mkdir -p dist
    shadow-cljs release npm
    npm publish
   '')
  ]
  ++ nix-shell.shell.buildInputs
 ;
});
}
