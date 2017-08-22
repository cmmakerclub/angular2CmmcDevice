#!/bin/bash

pushd dist
tar --exclude=".DS_Store" -czvf dist.tar.gz *
ls 
mv dist.tar.gz ../releases
popd


