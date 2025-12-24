# Projects API

## Authentication
Use API key in header: `X-API-Key: your_api_key_here`

## Endpoints

### GET /api/projects
List all projects (public)

### POST /api/projects
Create project (requires auth)
```json
{
  "title": "Project Name",
  "desc": "Description",
  "img": "image_url",
  "tag": "Fullstack",
  "tech": ["React", "Node.js"],
  "images": ["url1", "url2"]
}
```

### PUT /api/projects/[id]
Update project (requires auth)

### DELETE /api/projects/[id]
Delete project (requires auth)

### POST /api/upload
Upload images (returns file URLs)