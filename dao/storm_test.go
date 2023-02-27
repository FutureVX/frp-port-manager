package dao

import "testing"

const (
	StormPath = "../storm.db"
)

func TestCreateProxy(t *testing.T) {
	storm, err := NewStorm(StormPath)
	if err != nil {
		if err != nil {
			t.Fatalf("cannot connect stormdb: %v", err)
		}
	}
	defer storm.Close()

	_, err = storm.CreateProxy("test3", 1572)
	if err != nil {
		t.Fatalf("cannot create proxy: %v", err)
	}

}

func TestGetProxy(t *testing.T) {
	storm, err := NewStorm(StormPath)
	if err != nil {
		if err != nil {
			t.Fatalf("cannot connect stormdb: %v", err)
		}
	}
	defer storm.Close()

	r, err := storm.GetProxyByPort(4567)
	if err != nil {
		t.Fatalf("cannot get proxy: %v", err)
		return
	}

	t.Logf("%+v", r)
}

func TestGetProxies(t *testing.T) {
	storm, err := NewStorm(StormPath)
	if err != nil {
		if err != nil {
			t.Fatalf("cannot connect stormdb: %v", err)
		}
	}
	defer storm.Close()

	r, err := storm.GetProxies()
	if err != nil {
		t.Fatalf("cannot get proxies: %v", err)
	}

	t.Logf("got proxy num: %d", len(r))
}

func TestUpdateProxy(t *testing.T) {
	storm, err := NewStorm(StormPath)
	if err != nil {
		if err != nil {
			t.Fatalf("cannot connect stormdb: %v", err)
		}
	}
	defer storm.Close()

	err = storm.UpdateProxy("test1", true)
	if err != nil {
		t.Fatalf("cannot update proxies: %v", err)
	}

}

func TestDeleteProxy(t *testing.T) {
	storm, err := NewStorm(StormPath)
	if err != nil {
		if err != nil {
			t.Fatalf("cannot connect stormdb: %v", err)
		}
	}
	defer storm.Close()

	err = storm.DeleteProxy(1)
	if err != nil {
		t.Fatalf("cannot delete proxies: %v", err)
	}
}
