package web

import (
	"embed"
	"errors"
	"io"
	"io/fs"
	"net/http"
	"path"
)

//go:embed public/*
//go:embed public/*/**
var EmbeddedFiles embed.FS

type ServeFileSystem struct {
	E    embed.FS
	Path string
}

type File struct {
	name string
	fs.File
}

func (f *File) Readdir(count int) ([]fs.FileInfo, error) {
	ff, ok := f.File.(fs.ReadDirFile)
	if !ok {
		return nil, &fs.PathError{Op: "readdir", Path: f.name, Err: errors.New("not implemented")}
	}
	fileList, err := ff.ReadDir(count)
	if err != nil {
		return nil, err
	}
	var rspList []fs.FileInfo
	for _, v := range fileList {
		temp, err := v.Info()
		if err != nil {
			return nil, err
		}
		rspList = append(rspList, temp)
	}
	return rspList, nil
}

func (f *File) Seek(offset int64, whence int) (int64, error) {
	ff, ok := f.File.(io.Seeker)
	if !ok {
		return 0, &fs.PathError{Op: "Seek", Path: f.name, Err: errors.New("not implemented")}
	}
	return ff.Seek(offset, whence)
}

func (c *ServeFileSystem) Open(name string) (http.File, error) {
	name = path.Join(c.Path, name)
	f, err := c.E.Open(name)
	if err != nil {
		return nil, err
	}
	ff := File{
		name: name,
		File: f,
	}
	return &ff, nil
}
