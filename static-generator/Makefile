MAIN_PATH="tmp/bin/main"


templ:
	@templ generate --watch --proxy="http://localhost:3000" --open-browser=false

server:
	@go run github.com/cosmtrek/air@v1.51.0 \
		--build.cmd "go build  -o ${MAIN_PATH} ./*.go" --build.bin "${MAIN_PATH}" --build.delay "100" \
		--build.exclude_dir "node_modules" \
		--build.include_ext "go,txt,css" \
		--build.stop_on_error "false" \
		--misc.clean_on_exit true

watch-assets:
	npx tailwindcss -i assets/app.css -o ../assets/styles.min.css --watch --minify

# run esbuild to generate the index.js bundle in watch mode.
watch-esbuild:
	npx esbuild assets/app.js --bundle --outdir=../assets --watch=forever


# start app in developement
dev:
	@make -j5  templ server watch-assets watch-esbuild

# build
tailwind-build:
	npx tailwindcss -i assets/app.css -o ../assets/styles.min.css --minify


templ-generate:
	templ generate

build-esbuild:
	npx esbuild assets/app.js --bundle --outdir=assets

build:
	make tailwind-build
	make templ-generate
#	make build-esbuild
	go build  -o ${MAIN_PATH} ./main.go

run :
	chmod +x ./bin/mbumwa3d && ./bin/mbumwa3d


# Pattern rule to catch all undefined targets
%:
	@echo "winding up..."
