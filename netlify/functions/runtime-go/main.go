package main

import (
	"encoding/json"
	"time"

	"github.com/aws/aws-lambda-go/events"
	"github.com/aws/aws-lambda-go/lambda"
)

type response struct {
	OK      bool   `json:"ok"`
	Runtime string `json:"runtime"`
	Path    string `json:"path"`
	Now     string `json:"now"`
}

func handler(request events.APIGatewayProxyRequest) (events.APIGatewayProxyResponse, error) {
	payload, err := json.Marshal(response{
		OK:      true,
		Runtime: "netlify-functions-go",
		Path:    request.Path,
		Now:     time.Now().UTC().Format(time.RFC3339),
	})
	if err != nil {
		return events.APIGatewayProxyResponse{StatusCode: 500, Body: "{\"ok\":false}"}, nil
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
