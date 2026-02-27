package handler

import (
	"encoding/json"
	"net/http"
	"runtime"
)

type response struct {
	OK        bool   `json:"ok"`
	Runtime   string `json:"runtime"`
	GoVersion string `json:"goVersion"`
	Path      string `json:"path"`
}

func Handler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json; charset=utf-8")
	w.Header().Set("Cache-Control", "no-store")

	_ = json.NewEncoder(w).Encode(response{
		OK:        true,
		Runtime:   "go",
		GoVersion: runtime.Version(),
		Path:      r.URL.Path,
	})
}
