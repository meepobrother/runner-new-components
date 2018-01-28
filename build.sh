#!/usr/bin/env bash
readonly currentDir=$(cd $(dirname $0); pwd)
cd ${currentDir}
rm -rf dist

# $(npm bin)/ng-packagr -p ./src/app/weui-badge/package.json
# $(npm bin)/ng-packagr -p ./src/app/weui-button/package.json
# $(npm bin)/ng-packagr -p ./src/app/weui-flex/package.json
# $(npm bin)/ng-packagr -p ./src/app/weui-geolocation/package.json
# $(npm bin)/ng-packagr -p ./src/app/weui-grids/package.json
# $(npm bin)/ng-packagr -p ./src/app/weui-image/package.json
# $(npm bin)/ng-packagr -p ./src/app/weui-input-cell/package.json
# $(npm bin)/ng-packagr -p ./src/app/weui-locpicker/package.json
# $(npm bin)/ng-packagr -p ./src/app/weui-swiper/package.json

$(npm bin)/ng-packagr -p ./src/app/package.json
