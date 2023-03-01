package dao

import (
	"github.com/asdine/storm/v3"
	"time"
)

type Proxy struct {
	Id           int    `storm:"id,increment" json:"id"`
	Name         string `storm:"unique" json:"name"`
	Port         int    `storm:"unique" json:"port"`
	CreatedAt    int64  `json:"createdAt"`
	LastUpdateAt int64  `json:"lastUpdateAt"`
	Status       bool   `json:"status"`
}

type Storm struct {
	db *storm.DB
}

func NewStorm(path string) (*Storm, error) {
	db, err := storm.Open(path)
	if err != nil {
		return nil, err
	}
	return &Storm{
		db: db,
	}, nil
}

func (s *Storm) Close() error {
	return s.db.Close()
}

func getNowUnixTime() int64 {
	return time.Now().Unix() * 1000
}

func (s *Storm) CreateProxy(name string, port int) (*Proxy, error) {

	r := &Proxy{
		Name:         name,
		Port:         port,
		CreatedAt:    getNowUnixTime(),
		LastUpdateAt: getNowUnixTime(),
		Status:       true,
	}

	if err := s.db.Save(r); err != nil {
		return nil, err
	}
	return r, nil
}

func (s *Storm) UpdateProxy(name string, status bool) error {
	r := &Proxy{}

	err := s.db.One("Name", name, r)
	if err != nil {
		return err
	}

	r.LastUpdateAt = getNowUnixTime()
	r.Status = status

	if err := s.db.Save(r); err != nil {
		return err
	}
	return nil
}

func (s *Storm) GetProxyByPort(port int) (*Proxy, error) {
	r := &Proxy{}

	err := s.db.One("Port", port, r)
	if err != nil {
		return nil, err
	}

	return r, nil
}

func (s *Storm) DeleteProxy(id int) error {
	r := &Proxy{}

	err := s.db.One("Id", id, r)
	if err != nil {
		return err
	}

	if err := s.db.DeleteStruct(r); err != nil {
		return err
	}
	return nil
}

func (s *Storm) GetProxies() ([]*Proxy, error) {
	var r []*Proxy

	if err := s.db.All(&r); err != nil {
		return nil, err
	}
	return r, nil
}
