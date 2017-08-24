#!/bin/bash

ng build
pushd dist
tar --exclude="*.map" --exclude=".DS_Store" -czvf dist.tar.gz *
ls 
mv dist.tar.gz ../releases
popd


