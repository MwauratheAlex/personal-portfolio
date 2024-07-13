MAIN_PATH="tmp/bin/main"

# run templ generation in watch mode to detect all .templ files and 
# re-create _templ.txt files on change, then send reload event to browser. 
# Default url: http://localhost:7331
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
	npx tailwindcss -i assets/app.css -o ../assets/styles.css --watch

# run esbuild to generate the index.js bundle in watch mode.
watch-esbuild:
	npx esbuild internal/assets/index.js --bundle --outdir=public/assets --watch=forever


# start app in developement
dev:
	@make -j5  templ server watch-assets
	#@make -j5  templ server watch-assets sync_assets watch-esbuild

# build the application for production. This will compile your app
# to a single binary with all its assets embedded.
# build:
# 	@npx tailwindcss -i app/assets/app.css -o ./public/assets/styles.css
# 	@npx esbuild app/assets/index.js --bundle --outdir=public/assets
# 	@go build -o bin/app_prod cmd/app/main.go
## Check if node and npm are installed, if not install them

tailwind-build:
	@npm install tailwindcss@3.4.4
	npx tailwindcss -i internal/assets/app.css -o public/assets/style.min.css --minify

templ-generate:
	go run github.com/a-h/templ/cmd/templ@latest generate

build: check-node
	make tailwind-build
	npx esbuild internal/assets/index.js --bundle --outdir=public/assets
	make templ-generate
	go build -ldflags "-X main.Environment=production" -o ./bin/mbumwa3d ./cmd/main.go

run :
	chmod +x ./bin/mbumwa3d && ./bin/mbumwa3d


# Pattern rule to catch all undefined targets
%:
	@echo "winding up..."
