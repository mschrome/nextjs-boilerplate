package main

import (
	"encoding/json"
	"runtime"
	"time"

	"github.com/aws/aws-lambda-go/events"
	"github.com/aws/aws-lambda-go/lambda"
)

type response struct {
	OK        bool   `json:"ok"`
	Runtime   string `json:"runtime"`
	GoVersion string `json:"goVersion"`
	Path      string `json:"path"`
	Now       string `json:"now"`
}

func handler(request events.APIGatewayProxyRequest) (events.APIGatewayProxyResponse, error) {
	payload, err := json.Marshal(response{
		OK:        true,
		Runtime:   "netlify-functions-go",
		GoVersion: runtime.Version(),
		Path:      request.Path,
		Now:       time.Now().UTC().Format(time.RFC3339),
	})
	if err != nil {
		return events.APIGatewayProxyResponse{
			StatusCode: 500,
			Headers: map[string]string{
				"Content-Type": "application/json; charset=utf-8",
			},
			Body: `{"ok":false,"error":"failed to encode response"}`,
		}, nil
	}

	return events.APIGatewayProxyResponse{
		StatusCode: 200,
		Headers: map[string]string{
			"Content-Type":  "application/json; charset=utf-8",
			"Cache-Control": "no-store",
		},
		Body: string(payload),
	}, nil
}

func main() {
	lambda.Start(handler)
}
