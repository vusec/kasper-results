const syscallTable = {
	"0": {
		"name": "sys_read",
		"signature": "(unsigned int fd, char __user *buf, size_t count)",
		"file": "fs/read_write.c",
		"lineNumber": 587,
		"nr_hex": "0x00",
		"types": [
			{
				"type": "unsigned int fd",
				"def": null
			},
			{
				"type": "char __user *buf",
				"def": null
			},
			{
				"type": "size_t count",
				"def": null
			}
		]
	},
	"1": {
		"name": "sys_write",
		"signature": "(unsigned int fd, const char __user *buf, size_t count)",
		"file": "fs/read_write.c",
		"lineNumber": 608,
		"nr_hex": "0x01",
		"types": [
			{
				"type": "unsigned int fd",
				"def": null
			},
			{
				"type": "const char __user *buf",
				"def": null
			},
			{
				"type": "size_t count",
				"def": null
			}
		]
	},
	"2": {
		"name": "sys_open",
		"signature": "(const char __user *filename, int flags, umode_t mode)",
		"file": "fs/fhandle.c",
		"lineNumber": 256,
		"nr_hex": "0x02",
		"types": [
			{
				"type": "const char __user *filename",
				"def": null
			},
			{
				"type": "int flags",
				"def": null
			},
			{
				"type": "umode_t mode",
				"def": null
			}
		]
	},
	"3": {
		"name": "sys_close",
		"signature": "(unsigned int fd)",
		"file": "fs/open.c",
		"lineNumber": 1163,
		"nr_hex": "0x03",
		"types": [
			{
				"type": "unsigned int fd",
				"def": null
			}
		]
	},
	"4": {
		"name": "sys_newstat",
		"signature": "(const char __user *filename, struct stat __user *statbuf)",
		"file": "fs/stat.c",
		"lineNumber": 333,
		"nr_hex": "0x04",
		"types": [
			{
				"type": "const char __user *filename",
				"def": null
			},
			{
				"type": "struct stat __user *statbuf",
				"def": {
					"line": 5,
					"file": "arch/alpha/include/uapi/asm/stat.h"
				}
			}
		]
	},
	"5": {
		"name": "sys_newfstat",
		"signature": "(unsigned int fd, struct stat __user *statbuf)",
		"file": "fs/stat.c",
		"lineNumber": 371,
		"nr_hex": "0x05",
		"types": [
			{
				"type": "unsigned int fd",
				"def": null
			},
			{
				"type": "struct stat __user *statbuf",
				"def": {
					"line": 5,
					"file": "arch/alpha/include/uapi/asm/stat.h"
				}
			}
		]
	},
	"6": {
		"name": "sys_newlstat",
		"signature": "(const char __user *filename, struct stat __user *statbuf)",
		"file": "fs/stat.c",
		"lineNumber": 344,
		"nr_hex": "0x06",
		"types": [
			{
				"type": "const char __user *filename",
				"def": null
			},
			{
				"type": "struct stat __user *statbuf",
				"def": {
					"line": 5,
					"file": "arch/alpha/include/uapi/asm/stat.h"
				}
			}
		]
	},
	"7": {
		"name": "sys_poll",
		"signature": "(struct pollfd __user *ufds, unsigned int nfds, int timeout)",
		"file": "fs/select.c",
		"lineNumber": 1013,
		"nr_hex": "0x07",
		"types": [
			{
				"type": "struct pollfd __user *ufds",
				"def": {
					"line": 36,
					"file": "include/uapi/asm-generic/poll.h"
				}
			},
			{
				"type": "unsigned int nfds",
				"def": null
			},
			{
				"type": "int timeout",
				"def": null
			}
		]
	},
	"8": {
		"name": "sys_lseek",
		"signature": "(unsigned int fd, off_t offset, unsigned int whence)",
		"file": "fs/read_write.c",
		"lineNumber": 322,
		"nr_hex": "0x08",
		"types": [
			{
				"type": "unsigned int fd",
				"def": null
			},
			{
				"type": "off_t offset",
				"def": null
			},
			{
				"type": "unsigned int whence",
				"def": null
			}
		]
	},
	"9": {
		"name": "sys_mmap",
		"signature": "( unsigned long addr, unsigned long len, int prot, int flags, int fd, long off)",
		"file": "arch/arm64/kernel/sys.c",
		"lineNumber": 32,
		"nr_hex": "0x09",
		"types": [
			{
				"type": "unsigned long addr",
				"def": null
			},
			{
				"type": "unsigned long len",
				"def": null
			},
			{
				"type": "int prot",
				"def": null
			},
			{
				"type": "int flags",
				"def": null
			},
			{
				"type": "int fd",
				"def": null
			},
			{
				"type": "long off",
				"def": null
			}
		]
	},
	"10": {
		"name": "sys_mprotect",
		"signature": "(unsigned long start, size_t len, unsigned long prot)",
		"file": "mm/mprotect.c",
		"lineNumber": 577,
		"nr_hex": "0x0a",
		"types": [
			{
				"type": "unsigned long start",
				"def": null
			},
			{
				"type": "size_t len",
				"def": null
			},
			{
				"type": "unsigned long prot",
				"def": null
			}
		]
	},
	"11": {
		"name": "sys_munmap",
		"signature": "(unsigned long addr, size_t len)",
		"file": "mm/mmap.c",
		"lineNumber": 2811,
		"nr_hex": "0x0b",
		"types": [
			{
				"type": "unsigned long addr",
				"def": null
			},
			{
				"type": "size_t len",
				"def": null
			}
		]
	},
	"12": {
		"name": "sys_brk",
		"signature": "(unsigned long brk)",
		"file": "mm/mmap.c",
		"lineNumber": 192,
		"nr_hex": "0x0c",
		"types": [
			{
				"type": "unsigned long brk",
				"def": null
			}
		]
	},
	"13": {
		"name": "sys_rt_sigaction",
		"signature": "(int, const struct sigaction __user *, struct sigaction __user *, size_t)",
		"file": "kernel/signal.c",
		"lineNumber": 3755,
		"nr_hex": "0x0d",
		"types": [
			{
				"type": "int",
				"def": null
			},
			{
				"type": "const struct sigaction __user *",
				"def": {
					"line": 100,
					"file": "arch/alpha/include/uapi/asm/signal.h"
				}
			},
			{
				"type": "struct sigaction __user *",
				"def": {
					"line": 100,
					"file": "arch/alpha/include/uapi/asm/signal.h"
				}
			},
			{
				"type": "size_t",
				"def": null
			}
		]
	},
	"14": {
		"name": "sys_rt_sigprocmask",
		"signature": "(int how, sigset_t __user *set, sigset_t __user *oset, size_t sigsetsize)",
		"file": "kernel/signal.c",
		"lineNumber": 2807,
		"nr_hex": "0x0e",
		"types": [
			{
				"type": "int how",
				"def": null
			},
			{
				"type": "sigset_t __user *set",
				"def": null
			},
			{
				"type": "sigset_t __user *oset",
				"def": null
			},
			{
				"type": "size_t sigsetsize",
				"def": null
			}
		]
	},
	"15": {},
	"16": {
		"name": "sys_ioctl",
		"signature": "(unsigned int fd, unsigned int cmd, unsigned long arg)",
		"file": "fs/ioctl.c",
		"lineNumber": 710,
		"nr_hex": "0x10",
		"types": [
			{
				"type": "unsigned int fd",
				"def": null
			},
			{
				"type": "unsigned int cmd",
				"def": null
			},
			{
				"type": "unsigned long arg",
				"def": null
			}
		]
	},
	"17": {
		"name": "sys_pread64",
		"signature": "(unsigned int fd, char __user *buf, size_t count, loff_t pos)",
		"file": "fs/read_write.c",
		"lineNumber": 634,
		"nr_hex": "0x11",
		"types": [
			{
				"type": "unsigned int fd",
				"def": null
			},
			{
				"type": "char __user *buf",
				"def": null
			},
			{
				"type": "size_t count",
				"def": null
			},
			{
				"type": "loff_t pos",
				"def": null
			}
		]
	},
	"18": {
		"name": "sys_pwrite64",
		"signature": "(unsigned int fd, const char __user *buf, size_t count, loff_t pos)",
		"file": "fs/read_write.c",
		"lineNumber": 660,
		"nr_hex": "0x12",
		"types": [
			{
				"type": "unsigned int fd",
				"def": null
			},
			{
				"type": "const char __user *buf",
				"def": null
			},
			{
				"type": "size_t count",
				"def": null
			},
			{
				"type": "loff_t pos",
				"def": null
			}
		]
	},
	"19": {
		"name": "sys_readv",
		"signature": "(unsigned long fd, const struct iovec __user *vec, unsigned long vlen)",
		"file": "fs/read_write.c",
		"lineNumber": 1104,
		"nr_hex": "0x13",
		"types": [
			{
				"type": "unsigned long fd",
				"def": null
			},
			{
				"type": "const struct iovec __user *vec",
				"def": null
			},
			{
				"type": "unsigned long vlen",
				"def": null
			}
		]
	},
	"20": {
		"name": "sys_writev",
		"signature": "(unsigned long fd, const struct iovec __user *vec, unsigned long vlen)",
		"file": "fs/read_write.c",
		"lineNumber": 1110,
		"nr_hex": "0x14",
		"types": [
			{
				"type": "unsigned long fd",
				"def": null
			},
			{
				"type": "const struct iovec __user *vec",
				"def": null
			},
			{
				"type": "unsigned long vlen",
				"def": null
			}
		]
	},
	"21": {
		"name": "sys_access",
		"signature": "(const char __user *filename, int mode)",
		"file": "fs/open.c",
		"lineNumber": 428,
		"nr_hex": "0x15",
		"types": [
			{
				"type": "const char __user *filename",
				"def": null
			},
			{
				"type": "int mode",
				"def": null
			}
		]
	},
	"22": {
		"name": "sys_pipe",
		"signature": "(int __user *fildes)",
		"file": "fs/pipe.c",
		"lineNumber": 864,
		"nr_hex": "0x16",
		"types": [
			{
				"type": "int __user *fildes",
				"def": null
			}
		]
	},
	"23": {
		"name": "sys_select",
		"signature": "(int n, fd_set __user *inp, fd_set __user *outp, fd_set __user *exp, struct timeval __user *tvp)",
		"file": "fs/select.c",
		"lineNumber": 697,
		"nr_hex": "0x17",
		"types": [
			{
				"type": "int n",
				"def": null
			},
			{
				"type": "fd_set __user *inp",
				"def": null
			},
			{
				"type": "fd_set __user *outp",
				"def": null
			},
			{
				"type": "fd_set __user *exp",
				"def": null
			},
			{
				"type": "struct timeval __user *tvp",
				"def": {
					"line": 16,
					"file": "include/uapi/linux/time.h"
				}
			}
		]
	},
	"24": {
		"name": "sys_sched_yield",
		"signature": "(void)",
		"file": "kernel/sched/core.c",
		"lineNumber": 4954,
		"nr_hex": "0x18",
		"types": []
	},
	"25": {
		"name": "sys_mremap",
		"signature": "(unsigned long addr, unsigned long old_len, unsigned long new_len, unsigned long flags, unsigned long new_addr)",
		"file": "mm/mremap.c",
		"lineNumber": 515,
		"nr_hex": "0x19",
		"types": [
			{
				"type": "unsigned long addr",
				"def": null
			},
			{
				"type": "unsigned long old_len",
				"def": null
			},
			{
				"type": "unsigned long new_len",
				"def": null
			},
			{
				"type": "unsigned long flags",
				"def": null
			},
			{
				"type": "unsigned long new_addr",
				"def": null
			}
		]
	},
	"26": {
		"name": "sys_msync",
		"signature": "(unsigned long start, size_t len, int flags)",
		"file": "mm/msync.c",
		"lineNumber": 32,
		"nr_hex": "0x1a",
		"types": [
			{
				"type": "unsigned long start",
				"def": null
			},
			{
				"type": "size_t len",
				"def": null
			},
			{
				"type": "int flags",
				"def": null
			}
		]
	},
	"27": {
		"name": "sys_mincore",
		"signature": "(unsigned long start, size_t len, unsigned char __user * vec)",
		"file": "mm/mincore.c",
		"lineNumber": 245,
		"nr_hex": "0x1b",
		"types": [
			{
				"type": "unsigned long start",
				"def": null
			},
			{
				"type": "size_t len",
				"def": null
			},
			{
				"type": "unsigned char __user * vec",
				"def": null
			}
		]
	},
	"28": {
		"name": "sys_madvise",
		"signature": "(unsigned long start, size_t len, int behavior)",
		"file": "mm/madvise.c",
		"lineNumber": 801,
		"nr_hex": "0x1c",
		"types": [
			{
				"type": "unsigned long start",
				"def": null
			},
			{
				"type": "size_t len",
				"def": null
			},
			{
				"type": "int behavior",
				"def": null
			}
		]
	},
	"29": {
		"name": "sys_shmget",
		"signature": "(key_t key, size_t size, int flag)",
		"file": "ipc/shm.c",
		"lineNumber": 745,
		"nr_hex": "0x1d",
		"types": [
			{
				"type": "key_t key",
				"def": null
			},
			{
				"type": "size_t size",
				"def": null
			},
			{
				"type": "int flag",
				"def": null
			}
		]
	},
	"30": {
		"name": "sys_shmat",
		"signature": "(int shmid, char __user *shmaddr, int shmflg)",
		"file": "ipc/shm.c",
		"lineNumber": 1565,
		"nr_hex": "0x1e",
		"types": [
			{
				"type": "int shmid",
				"def": null
			},
			{
				"type": "char __user *shmaddr",
				"def": null
			},
			{
				"type": "int shmflg",
				"def": null
			}
		]
	},
	"31": {
		"name": "sys_shmctl",
		"signature": "(int shmid, int cmd, struct shmid_ds __user *buf)",
		"file": "ipc/shm.c",
		"lineNumber": 1195,
		"nr_hex": "0x1f",
		"types": [
			{
				"type": "int shmid",
				"def": null
			},
			{
				"type": "int cmd",
				"def": null
			},
			{
				"type": "struct shmid_ds __user *buf",
				"def": {
					"line": 28,
					"file": "include/uapi/linux/shm.h"
				}
			}
		]
	},
	"32": {
		"name": "sys_dup",
		"signature": "(unsigned int fildes)",
		"file": "fs/file.c",
		"lineNumber": 944,
		"nr_hex": "0x20",
		"types": [
			{
				"type": "unsigned int fildes",
				"def": null
			}
		]
	},
	"33": {
		"name": "sys_dup2",
		"signature": "(unsigned int oldfd, unsigned int newfd)",
		"file": "fs/file.c",
		"lineNumber": 914,
		"nr_hex": "0x21",
		"types": [
			{
				"type": "unsigned int oldfd",
				"def": null
			},
			{
				"type": "unsigned int newfd",
				"def": null
			}
		]
	},
	"34": {
		"name": "sys_pause",
		"signature": "(void)",
		"file": "kernel/signal.c",
		"lineNumber": 3948,
		"nr_hex": "0x22",
		"types": []
	},
	"35": {
		"name": "sys_nanosleep",
		"signature": "(struct __kernel_timespec __user *rqtp, struct __kernel_timespec __user *rmtp)",
		"file": "kernel/time/hrtimer.c",
		"lineNumber": 1763,
		"nr_hex": "0x23",
		"types": [
			{
				"type": "struct __kernel_timespec __user *rqtp",
				"def": null
			},
			{
				"type": "struct __kernel_timespec __user *rmtp",
				"def": null
			}
		]
	},
	"36": {
		"name": "sys_getitimer",
		"signature": "(int which, struct itimerval __user *value)",
		"file": "kernel/time/itimer.c",
		"lineNumber": 107,
		"nr_hex": "0x24",
		"types": [
			{
				"type": "int which",
				"def": null
			},
			{
				"type": "struct itimerval __user *value",
				"def": {
					"line": 40,
					"file": "include/uapi/linux/time.h"
				}
			}
		]
	},
	"37": {
		"name": "sys_alarm",
		"signature": "(unsigned int seconds)",
		"file": "kernel/time/itimer.c",
		"lineNumber": 286,
		"nr_hex": "0x25",
		"types": [
			{
				"type": "unsigned int seconds",
				"def": null
			}
		]
	},
	"38": {
		"name": "sys_setitimer",
		"signature": "(int which, struct itimerval __user *value, struct itimerval __user *ovalue)",
		"file": "kernel/time/itimer.c",
		"lineNumber": 293,
		"nr_hex": "0x26",
		"types": [
			{
				"type": "int which",
				"def": null
			},
			{
				"type": "struct itimerval __user *value",
				"def": {
					"line": 40,
					"file": "include/uapi/linux/time.h"
				}
			},
			{
				"type": "struct itimerval __user *ovalue",
				"def": {
					"line": 40,
					"file": "include/uapi/linux/time.h"
				}
			}
		]
	},
	"39": {
		"name": "sys_getpid",
		"signature": "(void)",
		"file": "kernel/sys.c",
		"lineNumber": 888,
		"nr_hex": "0x27",
		"types": []
	},
	"40": {
		"name": "sys_sendfile64",
		"signature": "(int out_fd, int in_fd, loff_t __user *offset, size_t count)",
		"file": "fs/read_write.c",
		"lineNumber": 1494,
		"nr_hex": "0x28",
		"types": [
			{
				"type": "int out_fd",
				"def": null
			},
			{
				"type": "int in_fd",
				"def": null
			},
			{
				"type": "loff_t __user *offset",
				"def": null
			},
			{
				"type": "size_t count",
				"def": null
			}
		]
	},
	"41": {
		"name": "sys_socket",
		"signature": "(int, int, int)",
		"file": "net/socket.c",
		"lineNumber": 1353,
		"nr_hex": "0x29",
		"types": [
			{
				"type": "int",
				"def": null
			},
			{
				"type": "int",
				"def": null
			},
			{
				"type": "int",
				"def": null
			}
		]
	},
	"42": {
		"name": "sys_connect",
		"signature": "(int, struct sockaddr __user *, int)",
		"file": "net/socket.c",
		"lineNumber": 1671,
		"nr_hex": "0x2a",
		"types": [
			{
				"type": "int",
				"def": null
			},
			{
				"type": "struct sockaddr __user *",
				"def": null
			},
			{
				"type": "int",
				"def": null
			}
		]
	},
	"43": {
		"name": "sys_accept",
		"signature": "(int, struct sockaddr __user *, int __user *)",
		"file": "net/socket.c",
		"lineNumber": 1627,
		"nr_hex": "0x2b",
		"types": [
			{
				"type": "int",
				"def": null
			},
			{
				"type": "struct sockaddr __user *",
				"def": null
			},
			{
				"type": "int __user *",
				"def": null
			}
		]
	},
	"44": {
		"name": "sys_sendto",
		"signature": "(int, void __user *, size_t, unsigned, struct sockaddr __user *, int)",
		"file": "net/socket.c",
		"lineNumber": 1795,
		"nr_hex": "0x2c",
		"types": [
			{
				"type": "int",
				"def": null
			},
			{
				"type": "void __user *",
				"def": null
			},
			{
				"type": "size_t",
				"def": null
			},
			{
				"type": "unsigned",
				"def": null
			},
			{
				"type": "struct sockaddr __user *",
				"def": null
			},
			{
				"type": "int",
				"def": null
			}
		]
	},
	"45": {
		"name": "sys_recvfrom",
		"signature": "(int, void __user *, size_t, unsigned, struct sockaddr __user *, int __user *)",
		"file": "net/socket.c",
		"lineNumber": 1858,
		"nr_hex": "0x2d",
		"types": [
			{
				"type": "int",
				"def": null
			},
			{
				"type": "void __user *",
				"def": null
			},
			{
				"type": "size_t",
				"def": null
			},
			{
				"type": "unsigned",
				"def": null
			},
			{
				"type": "struct sockaddr __user *",
				"def": null
			},
			{
				"type": "int __user *",
				"def": null
			}
		]
	},
	"46": {
		"name": "sys_sendmsg",
		"signature": "(int fd, struct user_msghdr __user *msg, unsigned flags)",
		"file": "net/socket.c",
		"lineNumber": 2160,
		"nr_hex": "0x2e",
		"types": [
			{
				"type": "int fd",
				"def": null
			},
			{
				"type": "struct user_msghdr __user *msg",
				"def": {
					"line": 58,
					"file": "include/linux/socket.h"
				}
			},
			{
				"type": "unsigned flags",
				"def": null
			}
		]
	},
	"47": {
		"name": "sys_recvmsg",
		"signature": "(int fd, struct user_msghdr __user *msg, unsigned flags)",
		"file": "net/socket.c",
		"lineNumber": 2333,
		"nr_hex": "0x2f",
		"types": [
			{
				"type": "int fd",
				"def": null
			},
			{
				"type": "struct user_msghdr __user *msg",
				"def": {
					"line": 58,
					"file": "include/linux/socket.h"
				}
			},
			{
				"type": "unsigned flags",
				"def": null
			}
		]
	},
	"48": {
		"name": "sys_shutdown",
		"signature": "(int, int)",
		"file": "net/socket.c",
		"lineNumber": 1971,
		"nr_hex": "0x30",
		"types": [
			{
				"type": "int",
				"def": null
			},
			{
				"type": "int",
				"def": null
			}
		]
	},
	"49": {
		"name": "sys_bind",
		"signature": "(int, struct sockaddr __user *, int)",
		"file": "net/socket.c",
		"lineNumber": 1491,
		"nr_hex": "0x31",
		"types": [
			{
				"type": "int",
				"def": null
			},
			{
				"type": "struct sockaddr __user *",
				"def": null
			},
			{
				"type": "int",
				"def": null
			}
		]
	},
	"50": {
		"name": "sys_listen",
		"signature": "(int, int)",
		"file": "net/socket.c",
		"lineNumber": 1523,
		"nr_hex": "0x32",
		"types": [
			{
				"type": "int",
				"def": null
			},
			{
				"type": "int",
				"def": null
			}
		]
	},
	"51": {
		"name": "sys_getsockname",
		"signature": "(int, struct sockaddr __user *, int __user *)",
		"file": "net/socket.c",
		"lineNumber": 1709,
		"nr_hex": "0x33",
		"types": [
			{
				"type": "int",
				"def": null
			},
			{
				"type": "struct sockaddr __user *",
				"def": null
			},
			{
				"type": "int __user *",
				"def": null
			}
		]
	},
	"52": {
		"name": "sys_getpeername",
		"signature": "(int, struct sockaddr __user *, int __user *)",
		"file": "net/socket.c",
		"lineNumber": 1745,
		"nr_hex": "0x34",
		"types": [
			{
				"type": "int",
				"def": null
			},
			{
				"type": "struct sockaddr __user *",
				"def": null
			},
			{
				"type": "int __user *",
				"def": null
			}
		]
	},
	"53": {
		"name": "sys_socketpair",
		"signature": "(int, int, int, int __user *)",
		"file": "net/socket.c",
		"lineNumber": 1454,
		"nr_hex": "0x35",
		"types": [
			{
				"type": "int",
				"def": null
			},
			{
				"type": "int",
				"def": null
			},
			{
				"type": "int",
				"def": null
			},
			{
				"type": "int __user *",
				"def": null
			}
		]
	},
	"54": {
		"name": "sys_setsockopt",
		"signature": "(int fd, int level, int optname, char __user *optval, int optlen)",
		"file": "net/socket.c",
		"lineNumber": 1909,
		"nr_hex": "0x36",
		"types": [
			{
				"type": "int fd",
				"def": null
			},
			{
				"type": "int level",
				"def": null
			},
			{
				"type": "int optname",
				"def": null
			},
			{
				"type": "char __user *optval",
				"def": null
			},
			{
				"type": "int optlen",
				"def": null
			}
		]
	},
	"55": {
		"name": "sys_getsockopt",
		"signature": "(int fd, int level, int optname, char __user *optval, int __user *optlen)",
		"file": "net/socket.c",
		"lineNumber": 1946,
		"nr_hex": "0x37",
		"types": [
			{
				"type": "int fd",
				"def": null
			},
			{
				"type": "int level",
				"def": null
			},
			{
				"type": "int optname",
				"def": null
			},
			{
				"type": "char __user *optval",
				"def": null
			},
			{
				"type": "int __user *optlen",
				"def": null
			}
		]
	},
	"56": {},
	"57": {},
	"58": {},
	"59": {},
	"60": {
		"name": "sys_exit",
		"signature": "(int error_code)",
		"file": "kernel/exit.c",
		"lineNumber": 946,
		"nr_hex": "0x3c",
		"types": [
			{
				"type": "int error_code",
				"def": null
			}
		]
	},
	"61": {
		"name": "sys_wait4",
		"signature": "(pid_t pid, int __user *stat_addr, int options, struct rusage __user *ru)",
		"file": "kernel/exit.c",
		"lineNumber": 1676,
		"nr_hex": "0x3d",
		"types": [
			{
				"type": "pid_t pid",
				"def": null
			},
			{
				"type": "int __user *stat_addr",
				"def": null
			},
			{
				"type": "int options",
				"def": null
			},
			{
				"type": "struct rusage __user *ru",
				"def": {
					"line": 24,
					"file": "include/uapi/linux/resource.h"
				}
			}
		]
	},
	"62": {
		"name": "sys_kill",
		"signature": "(pid_t pid, int sig)",
		"file": "kernel/signal.c",
		"lineNumber": 3269,
		"nr_hex": "0x3e",
		"types": [
			{
				"type": "pid_t pid",
				"def": null
			},
			{
				"type": "int sig",
				"def": null
			}
		]
	},
	"63": {
		"name": "sys_newuname",
		"signature": "(struct new_utsname __user *name)",
		"file": "kernel/sys.c",
		"lineNumber": 1235,
		"nr_hex": "0x3f",
		"types": [
			{
				"type": "struct new_utsname __user *name",
				"def": {
					"line": 25,
					"file": "include/uapi/linux/utsname.h"
				}
			}
		]
	},
	"64": {
		"name": "sys_semget",
		"signature": "(key_t key, int nsems, int semflg)",
		"file": "ipc/sem.c",
		"lineNumber": 607,
		"nr_hex": "0x40",
		"types": [
			{
				"type": "key_t key",
				"def": null
			},
			{
				"type": "int nsems",
				"def": null
			},
			{
				"type": "int semflg",
				"def": null
			}
		]
	},
	"65": {
		"name": "sys_semop",
		"signature": "(int semid, struct sembuf __user *sops, unsigned nsops)",
		"file": "ipc/sem.c",
		"lineNumber": 2236,
		"nr_hex": "0x41",
		"types": [
			{
				"type": "int semid",
				"def": null
			},
			{
				"type": "struct sembuf __user *sops",
				"def": {
					"line": 40,
					"file": "include/uapi/linux/sem.h"
				}
			},
			{
				"type": "unsigned nsops",
				"def": null
			}
		]
	},
	"66": {
		"name": "sys_semctl",
		"signature": "(int semid, int semnum, int cmd, unsigned long arg)",
		"file": "ipc/sem.c",
		"lineNumber": 1692,
		"nr_hex": "0x42",
		"types": [
			{
				"type": "int semid",
				"def": null
			},
			{
				"type": "int semnum",
				"def": null
			},
			{
				"type": "int cmd",
				"def": null
			},
			{
				"type": "unsigned long arg",
				"def": null
			}
		]
	},
	"67": {
		"name": "sys_shmdt",
		"signature": "(char __user *shmaddr)",
		"file": "ipc/shm.c",
		"lineNumber": 1707,
		"nr_hex": "0x43",
		"types": [
			{
				"type": "char __user *shmaddr",
				"def": null
			}
		]
	},
	"68": {
		"name": "sys_msgget",
		"signature": "(key_t key, int msgflg)",
		"file": "ipc/msg.c",
		"lineNumber": 293,
		"nr_hex": "0x44",
		"types": [
			{
				"type": "key_t key",
				"def": null
			},
			{
				"type": "int msgflg",
				"def": null
			}
		]
	},
	"69": {
		"name": "sys_msgsnd",
		"signature": "(int msqid, struct msgbuf __user *msgp, size_t msgsz, int msgflg)",
		"file": "ipc/msg.c",
		"lineNumber": 914,
		"nr_hex": "0x45",
		"types": [
			{
				"type": "int msqid",
				"def": null
			},
			{
				"type": "struct msgbuf __user *msgp",
				"def": null
			},
			{
				"type": "size_t msgsz",
				"def": null
			},
			{
				"type": "int msgflg",
				"def": null
			}
		]
	},
	"70": {
		"name": "sys_msgrcv",
		"signature": "(int msqid, struct msgbuf __user *msgp, size_t msgsz, long msgtyp, int msgflg)",
		"file": "ipc/msg.c",
		"lineNumber": 1205,
		"nr_hex": "0x46",
		"types": [
			{
				"type": "int msqid",
				"def": null
			},
			{
				"type": "struct msgbuf __user *msgp",
				"def": null
			},
			{
				"type": "size_t msgsz",
				"def": null
			},
			{
				"type": "long msgtyp",
				"def": null
			},
			{
				"type": "int msgflg",
				"def": null
			}
		]
	},
	"71": {
		"name": "sys_msgctl",
		"signature": "(int msqid, int cmd, struct msqid_ds __user *buf)",
		"file": "ipc/msg.c",
		"lineNumber": 614,
		"nr_hex": "0x47",
		"types": [
			{
				"type": "int msqid",
				"def": null
			},
			{
				"type": "int cmd",
				"def": null
			},
			{
				"type": "struct msqid_ds __user *buf",
				"def": {
					"line": 18,
					"file": "include/uapi/linux/msg.h"
				}
			}
		]
	},
	"72": {
		"name": "sys_fcntl",
		"signature": "(unsigned int fd, unsigned int cmd, unsigned long arg)",
		"file": "fs/fcntl.c",
		"lineNumber": 448,
		"nr_hex": "0x48",
		"types": [
			{
				"type": "unsigned int fd",
				"def": null
			},
			{
				"type": "unsigned int cmd",
				"def": null
			},
			{
				"type": "unsigned long arg",
				"def": null
			}
		]
	},
	"73": {
		"name": "sys_flock",
		"signature": "(unsigned int fd, unsigned int cmd)",
		"file": "fs/locks.c",
		"lineNumber": 1985,
		"nr_hex": "0x49",
		"types": [
			{
				"type": "unsigned int fd",
				"def": null
			},
			{
				"type": "unsigned int cmd",
				"def": null
			}
		]
	},
	"74": {
		"name": "sys_fsync",
		"signature": "(unsigned int fd)",
		"file": "fs/sync.c",
		"lineNumber": 227,
		"nr_hex": "0x4a",
		"types": [
			{
				"type": "unsigned int fd",
				"def": null
			}
		]
	},
	"75": {
		"name": "sys_fdatasync",
		"signature": "(unsigned int fd)",
		"file": "fs/sync.c",
		"lineNumber": 232,
		"nr_hex": "0x4b",
		"types": [
			{
				"type": "unsigned int fd",
				"def": null
			}
		]
	},
	"76": {
		"name": "sys_truncate",
		"signature": "(const char __user *path, long length)",
		"file": "fs/open.c",
		"lineNumber": 142,
		"nr_hex": "0x4c",
		"types": [
			{
				"type": "const char __user *path",
				"def": null
			},
			{
				"type": "long length",
				"def": null
			}
		]
	},
	"77": {
		"name": "sys_ftruncate",
		"signature": "(unsigned int fd, unsigned long length)",
		"file": "fs/open.c",
		"lineNumber": 202,
		"nr_hex": "0x4d",
		"types": [
			{
				"type": "unsigned int fd",
				"def": null
			},
			{
				"type": "unsigned long length",
				"def": null
			}
		]
	},
	"78": {
		"name": "sys_getdents",
		"signature": "(unsigned int fd, struct linux_dirent __user *dirent, unsigned int count)",
		"file": "fs/readdir.c",
		"lineNumber": 212,
		"nr_hex": "0x4e",
		"types": [
			{
				"type": "unsigned int fd",
				"def": null
			},
			{
				"type": "struct linux_dirent __user *dirent",
				"def": {
					"line": 151,
					"file": "fs/readdir.c"
				}
			},
			{
				"type": "unsigned int count",
				"def": null
			}
		]
	},
	"79": {
		"name": "sys_getcwd",
		"signature": "(char __user *buf, unsigned long size)",
		"file": "fs/d_path.c",
		"lineNumber": 424,
		"nr_hex": "0x4f",
		"types": [
			{
				"type": "char __user *buf",
				"def": null
			},
			{
				"type": "unsigned long size",
				"def": null
			}
		]
	},
	"80": {
		"name": "sys_chdir",
		"signature": "(const char __user *filename)",
		"file": "fs/open.c",
		"lineNumber": 459,
		"nr_hex": "0x50",
		"types": [
			{
				"type": "const char __user *filename",
				"def": null
			}
		]
	},
	"81": {
		"name": "sys_fchdir",
		"signature": "(unsigned int fd)",
		"file": "fs/open.c",
		"lineNumber": 464,
		"nr_hex": "0x51",
		"types": [
			{
				"type": "unsigned int fd",
				"def": null
			}
		]
	},
	"82": {
		"name": "sys_rename",
		"signature": "(const char __user *oldname, const char __user *newname)",
		"file": "fs/namei.c",
		"lineNumber": 4670,
		"nr_hex": "0x52",
		"types": [
			{
				"type": "const char __user *oldname",
				"def": null
			},
			{
				"type": "const char __user *newname",
				"def": null
			}
		]
	},
	"83": {
		"name": "sys_mkdir",
		"signature": "(const char __user *pathname, umode_t mode)",
		"file": "fs/namei.c",
		"lineNumber": 3853,
		"nr_hex": "0x53",
		"types": [
			{
				"type": "const char __user *pathname",
				"def": null
			},
			{
				"type": "umode_t mode",
				"def": null
			}
		]
	},
	"84": {
		"name": "sys_rmdir",
		"signature": "(const char __user *pathname)",
		"file": "fs/namei.c",
		"lineNumber": 3956,
		"nr_hex": "0x54",
		"types": [
			{
				"type": "const char __user *pathname",
				"def": null
			}
		]
	},
	"85": {
		"name": "sys_creat",
		"signature": "(const char __user *pathname, umode_t mode)",
		"file": "fs/open.c",
		"lineNumber": 1125,
		"nr_hex": "0x55",
		"types": [
			{
				"type": "const char __user *pathname",
				"def": null
			},
			{
				"type": "umode_t mode",
				"def": null
			}
		]
	},
	"86": {
		"name": "sys_link",
		"signature": "(const char __user *oldname, const char __user *newname)",
		"file": "fs/namei.c",
		"lineNumber": 4335,
		"nr_hex": "0x56",
		"types": [
			{
				"type": "const char __user *oldname",
				"def": null
			},
			{
				"type": "const char __user *newname",
				"def": null
			}
		]
	},
	"87": {
		"name": "sys_unlink",
		"signature": "(const char __user *pathname)",
		"file": "fs/namei.c",
		"lineNumber": 4107,
		"nr_hex": "0x57",
		"types": [
			{
				"type": "const char __user *pathname",
				"def": null
			}
		]
	},
	"88": {
		"name": "sys_symlink",
		"signature": "(const char __user *old, const char __user *new)",
		"file": "fs/namei.c",
		"lineNumber": 4170,
		"nr_hex": "0x58",
		"types": [
			{
				"type": "const char __user *old",
				"def": null
			},
			{
				"type": "const char __user *new",
				"def": null
			}
		]
	},
	"89": {
		"name": "sys_readlink",
		"signature": "(const char __user *path, char __user *buf, int bufsiz)",
		"file": "fs/stat.c",
		"lineNumber": 424,
		"nr_hex": "0x59",
		"types": [
			{
				"type": "const char __user *path",
				"def": null
			},
			{
				"type": "char __user *buf",
				"def": null
			},
			{
				"type": "int bufsiz",
				"def": null
			}
		]
	},
	"90": {
		"name": "sys_chmod",
		"signature": "(const char __user *filename, umode_t mode)",
		"file": "fs/open.c",
		"lineNumber": 595,
		"nr_hex": "0x5a",
		"types": [
			{
				"type": "const char __user *filename",
				"def": null
			},
			{
				"type": "umode_t mode",
				"def": null
			}
		]
	},
	"91": {
		"name": "sys_fchmod",
		"signature": "(unsigned int fd, umode_t mode)",
		"file": "fs/open.c",
		"lineNumber": 566,
		"nr_hex": "0x5b",
		"types": [
			{
				"type": "unsigned int fd",
				"def": null
			},
			{
				"type": "umode_t mode",
				"def": null
			}
		]
	},
	"92": {
		"name": "sys_chown",
		"signature": "(const char __user *filename, uid_t user, gid_t group)",
		"file": "fs/open.c",
		"lineNumber": 680,
		"nr_hex": "0x5c",
		"types": [
			{
				"type": "const char __user *filename",
				"def": null
			},
			{
				"type": "uid_t user",
				"def": null
			},
			{
				"type": "gid_t group",
				"def": null
			}
		]
	},
	"93": {
		"name": "sys_fchown",
		"signature": "(unsigned int fd, uid_t user, gid_t group)",
		"file": "fs/open.c",
		"lineNumber": 711,
		"nr_hex": "0x5d",
		"types": [
			{
				"type": "unsigned int fd",
				"def": null
			},
			{
				"type": "uid_t user",
				"def": null
			},
			{
				"type": "gid_t group",
				"def": null
			}
		]
	},
	"94": {
		"name": "sys_lchown",
		"signature": "(const char __user *filename, uid_t user, gid_t group)",
		"file": "fs/open.c",
		"lineNumber": 685,
		"nr_hex": "0x5e",
		"types": [
			{
				"type": "const char __user *filename",
				"def": null
			},
			{
				"type": "uid_t user",
				"def": null
			},
			{
				"type": "gid_t group",
				"def": null
			}
		]
	},
	"95": {
		"name": "sys_umask",
		"signature": "(int mask)",
		"file": "kernel/sys.c",
		"lineNumber": 1811,
		"nr_hex": "0x5f",
		"types": [
			{
				"type": "int mask",
				"def": null
			}
		]
	},
	"96": {
		"name": "sys_gettimeofday",
		"signature": "(struct timeval __user *tv, struct timezone __user *tz)",
		"file": "kernel/time/time.c",
		"lineNumber": 143,
		"nr_hex": "0x60",
		"types": [
			{
				"type": "struct timeval __user *tv",
				"def": {
					"line": 16,
					"file": "include/uapi/linux/time.h"
				}
			},
			{
				"type": "struct timezone __user *tz",
				"def": null
			}
		]
	},
	"97": {
		"name": "sys_getrlimit",
		"signature": "(unsigned int resource, struct rlimit __user *rlim)",
		"file": "kernel/sys.c",
		"lineNumber": 1379,
		"nr_hex": "0x61",
		"types": [
			{
				"type": "unsigned int resource",
				"def": null
			},
			{
				"type": "struct rlimit __user *rlim",
				"def": null
			}
		]
	},
	"98": {
		"name": "sys_getrusage",
		"signature": "(int who, struct rusage __user *ru)",
		"file": "kernel/sys.c",
		"lineNumber": 1785,
		"nr_hex": "0x62",
		"types": [
			{
				"type": "int who",
				"def": null
			},
			{
				"type": "struct rusage __user *ru",
				"def": {
					"line": 24,
					"file": "include/uapi/linux/resource.h"
				}
			}
		]
	},
	"99": {
		"name": "sys_sysinfo",
		"signature": "(struct sysinfo __user *info)",
		"file": "kernel/sys.c",
		"lineNumber": 2565,
		"nr_hex": "0x63",
		"types": [
			{
				"type": "struct sysinfo __user *info",
				"def": null
			}
		]
	},
	"100": {
		"name": "sys_times",
		"signature": "(struct tms __user *tbuf)",
		"file": "kernel/sys.c",
		"lineNumber": 953,
		"nr_hex": "0x64",
		"types": [
			{
				"type": "struct tms __user *tbuf",
				"def": null
			}
		]
	},
	"101": {
		"name": "sys_ptrace",
		"signature": "(long request, long pid, unsigned long addr, unsigned long data)",
		"file": "kernel/ptrace.c",
		"lineNumber": 1121,
		"nr_hex": "0x65",
		"types": [
			{
				"type": "long request",
				"def": null
			},
			{
				"type": "long pid",
				"def": null
			},
			{
				"type": "unsigned long addr",
				"def": null
			},
			{
				"type": "unsigned long data",
				"def": null
			}
		]
	},
	"102": {
		"name": "sys_getuid",
		"signature": "(void)",
		"file": "kernel/sys.c",
		"lineNumber": 916,
		"nr_hex": "0x66",
		"types": []
	},
	"103": {
		"name": "sys_syslog",
		"signature": "(int type, char __user *buf, int len)",
		"file": "kernel/printk/printk.c",
		"lineNumber": 1556,
		"nr_hex": "0x67",
		"types": [
			{
				"type": "int type",
				"def": null
			},
			{
				"type": "char __user *buf",
				"def": null
			},
			{
				"type": "int len",
				"def": null
			}
		]
	},
	"104": {
		"name": "sys_getgid",
		"signature": "(void)",
		"file": "kernel/sys.c",
		"lineNumber": 928,
		"nr_hex": "0x68",
		"types": []
	},
	"105": {
		"name": "sys_setuid",
		"signature": "(uid_t uid)",
		"file": "kernel/sys.c",
		"lineNumber": 608,
		"nr_hex": "0x69",
		"types": [
			{
				"type": "uid_t uid",
				"def": null
			}
		]
	},
	"106": {
		"name": "sys_setgid",
		"signature": "(gid_t gid)",
		"file": "kernel/sys.c",
		"lineNumber": 441,
		"nr_hex": "0x6a",
		"types": [
			{
				"type": "gid_t gid",
				"def": null
			}
		]
	},
	"107": {
		"name": "sys_geteuid",
		"signature": "(void)",
		"file": "kernel/sys.c",
		"lineNumber": 922,
		"nr_hex": "0x6b",
		"types": []
	},
	"108": {
		"name": "sys_getegid",
		"signature": "(void)",
		"file": "kernel/sys.c",
		"lineNumber": 934,
		"nr_hex": "0x6c",
		"types": []
	},
	"109": {
		"name": "sys_setpgid",
		"signature": "(pid_t pid, pid_t pgid)",
		"file": "kernel/sys.c",
		"lineNumber": 1003,
		"nr_hex": "0x6d",
		"types": [
			{
				"type": "pid_t pid",
				"def": null
			},
			{
				"type": "pid_t pgid",
				"def": null
			}
		]
	},
	"110": {
		"name": "sys_getppid",
		"signature": "(void)",
		"file": "kernel/sys.c",
		"lineNumber": 905,
		"nr_hex": "0x6e",
		"types": []
	},
	"111": {
		"name": "sys_getpgrp",
		"signature": "(void)",
		"file": "kernel/sys.c",
		"lineNumber": 1109,
		"nr_hex": "0x6f",
		"types": []
	},
	"112": {
		"name": "sys_setsid",
		"signature": "(void)",
		"file": "kernel/sys.c",
		"lineNumber": 1188,
		"nr_hex": "0x70",
		"types": []
	},
	"113": {
		"name": "sys_setreuid",
		"signature": "(uid_t ruid, uid_t euid)",
		"file": "kernel/sys.c",
		"lineNumber": 550,
		"nr_hex": "0x71",
		"types": [
			{
				"type": "uid_t ruid",
				"def": null
			},
			{
				"type": "uid_t euid",
				"def": null
			}
		]
	},
	"114": {
		"name": "sys_setregid",
		"signature": "(gid_t rgid, gid_t egid)",
		"file": "kernel/sys.c",
		"lineNumber": 399,
		"nr_hex": "0x72",
		"types": [
			{
				"type": "gid_t rgid",
				"def": null
			},
			{
				"type": "gid_t egid",
				"def": null
			}
		]
	},
	"115": {
		"name": "sys_getgroups",
		"signature": "(int gidsetsize, gid_t __user *grouplist)",
		"file": "kernel/groups.c",
		"lineNumber": 153,
		"nr_hex": "0x73",
		"types": [
			{
				"type": "int gidsetsize",
				"def": null
			},
			{
				"type": "gid_t __user *grouplist",
				"def": null
			}
		]
	},
	"116": {
		"name": "sys_setgroups",
		"signature": "(int gidsetsize, gid_t __user *grouplist)",
		"file": "kernel/groups.c",
		"lineNumber": 190,
		"nr_hex": "0x74",
		"types": [
			{
				"type": "int gidsetsize",
				"def": null
			},
			{
				"type": "gid_t __user *grouplist",
				"def": null
			}
		]
	},
	"117": {
		"name": "sys_setresuid",
		"signature": "(uid_t ruid, uid_t euid, uid_t suid)",
		"file": "kernel/sys.c",
		"lineNumber": 683,
		"nr_hex": "0x75",
		"types": [
			{
				"type": "uid_t ruid",
				"def": null
			},
			{
				"type": "uid_t euid",
				"def": null
			},
			{
				"type": "uid_t suid",
				"def": null
			}
		]
	},
	"118": {
		"name": "sys_getresuid",
		"signature": "(uid_t __user *ruid, uid_t __user *euid, uid_t __user *suid)",
		"file": "kernel/sys.c",
		"lineNumber": 688,
		"nr_hex": "0x76",
		"types": [
			{
				"type": "uid_t __user *ruid",
				"def": null
			},
			{
				"type": "uid_t __user *euid",
				"def": null
			},
			{
				"type": "uid_t __user *suid",
				"def": null
			}
		]
	},
	"119": {
		"name": "sys_setresgid",
		"signature": "(gid_t rgid, gid_t egid, gid_t sgid)",
		"file": "kernel/sys.c",
		"lineNumber": 762,
		"nr_hex": "0x77",
		"types": [
			{
				"type": "gid_t rgid",
				"def": null
			},
			{
				"type": "gid_t egid",
				"def": null
			},
			{
				"type": "gid_t sgid",
				"def": null
			}
		]
	},
	"120": {
		"name": "sys_getresgid",
		"signature": "(gid_t __user *rgid, gid_t __user *egid, gid_t __user *sgid)",
		"file": "kernel/sys.c",
		"lineNumber": 767,
		"nr_hex": "0x78",
		"types": [
			{
				"type": "gid_t __user *rgid",
				"def": null
			},
			{
				"type": "gid_t __user *egid",
				"def": null
			},
			{
				"type": "gid_t __user *sgid",
				"def": null
			}
		]
	},
	"121": {
		"name": "sys_getpgid",
		"signature": "(pid_t pid)",
		"file": "kernel/sys.c",
		"lineNumber": 1102,
		"nr_hex": "0x79",
		"types": [
			{
				"type": "pid_t pid",
				"def": null
			}
		]
	},
	"122": {
		"name": "sys_setfsuid",
		"signature": "(uid_t uid)",
		"file": "kernel/sys.c",
		"lineNumber": 830,
		"nr_hex": "0x7a",
		"types": [
			{
				"type": "uid_t uid",
				"def": null
			}
		]
	},
	"123": {
		"name": "sys_setfsgid",
		"signature": "(gid_t gid)",
		"file": "kernel/sys.c",
		"lineNumber": 873,
		"nr_hex": "0x7b",
		"types": [
			{
				"type": "gid_t gid",
				"def": null
			}
		]
	},
	"124": {
		"name": "sys_getsid",
		"signature": "(pid_t pid)",
		"file": "kernel/sys.c",
		"lineNumber": 1116,
		"nr_hex": "0x7c",
		"types": [
			{
				"type": "pid_t pid",
				"def": null
			}
		]
	},
	"125": {
		"name": "sys_capget",
		"signature": "(cap_user_header_t header, cap_user_data_t dataptr)",
		"file": "kernel/capability.c",
		"lineNumber": 150,
		"nr_hex": "0x7d",
		"types": [
			{
				"type": "cap_user_header_t header",
				"def": null
			},
			{
				"type": "cap_user_data_t dataptr",
				"def": null
			}
		]
	},
	"126": {
		"name": "sys_capset",
		"signature": "(cap_user_header_t header, const cap_user_data_t data)",
		"file": "kernel/capability.c",
		"lineNumber": 224,
		"nr_hex": "0x7e",
		"types": [
			{
				"type": "cap_user_header_t header",
				"def": null
			},
			{
				"type": "const cap_user_data_t data",
				"def": null
			}
		]
	},
	"127": {
		"name": "sys_rt_sigpending",
		"signature": "(sigset_t __user *set, size_t sigsetsize)",
		"file": "kernel/signal.c",
		"lineNumber": 2879,
		"nr_hex": "0x7f",
		"types": [
			{
				"type": "sigset_t __user *set",
				"def": null
			},
			{
				"type": "size_t sigsetsize",
				"def": null
			}
		]
	},
	"128": {
		"name": "sys_rt_sigtimedwait",
		"signature": "(const sigset_t __user *uthese, siginfo_t __user *uinfo, const struct timespec __user *uts, size_t sigsetsize)",
		"file": "kernel/signal.c",
		"lineNumber": 3201,
		"nr_hex": "0x80",
		"types": [
			{
				"type": "const sigset_t __user *uthese",
				"def": null
			},
			{
				"type": "siginfo_t __user *uinfo",
				"def": null
			},
			{
				"type": "const struct timespec __user *uts",
				"def": null
			},
			{
				"type": "size_t sigsetsize",
				"def": null
			}
		]
	},
	"129": {
		"name": "sys_rt_sigqueueinfo",
		"signature": "(pid_t pid, int sig, siginfo_t __user *uinfo)",
		"file": "kernel/signal.c",
		"lineNumber": 3383,
		"nr_hex": "0x81",
		"types": [
			{
				"type": "pid_t pid",
				"def": null
			},
			{
				"type": "int sig",
				"def": null
			},
			{
				"type": "siginfo_t __user *uinfo",
				"def": null
			}
		]
	},
	"130": {
		"name": "sys_rt_sigsuspend",
		"signature": "(sigset_t __user *unewset, size_t sigsetsize)",
		"file": "kernel/signal.c",
		"lineNumber": 3978,
		"nr_hex": "0x82",
		"types": [
			{
				"type": "sigset_t __user *unewset",
				"def": null
			},
			{
				"type": "size_t sigsetsize",
				"def": null
			}
		]
	},
	"131": {
		"name": "sys_sigaltstack",
		"signature": "(const struct sigaltstack __user *uss, struct sigaltstack __user *uoss)",
		"file": "kernel/signal.c",
		"lineNumber": 3564,
		"nr_hex": "0x83",
		"types": [
			{
				"type": "const struct sigaltstack __user *uss",
				"def": {
					"line": 114,
					"file": "arch/alpha/include/uapi/asm/signal.h"
				}
			},
			{
				"type": "struct sigaltstack __user *uoss",
				"def": {
					"line": 114,
					"file": "arch/alpha/include/uapi/asm/signal.h"
				}
			}
		]
	},
	"132": {
		"name": "sys_utime",
		"signature": "(char __user *filename, struct utimbuf __user *times)",
		"file": "fs/utimes.c",
		"lineNumber": 24,
		"nr_hex": "0x84",
		"types": [
			{
				"type": "char __user *filename",
				"def": null
			},
			{
				"type": "struct utimbuf __user *times",
				"def": {
					"line": 7,
					"file": "include/uapi/linux/utime.h"
				}
			}
		]
	},
	"133": {
		"name": "sys_mknod",
		"signature": "(const char __user *filename, umode_t mode, unsigned dev)",
		"file": "fs/namei.c",
		"lineNumber": 3792,
		"nr_hex": "0x85",
		"types": [
			{
				"type": "const char __user *filename",
				"def": null
			},
			{
				"type": "umode_t mode",
				"def": null
			},
			{
				"type": "unsigned dev",
				"def": null
			}
		]
	},
	"134": {
		"name": "",
		"lineNumber": "",
		"file": "",
		"signature": "",
		"nr_hex": "0x86",
		"types": []
	},
	"135": {
		"name": "sys_personality",
		"signature": "(unsigned int personality)",
		"file": "kernel/exec_domain.c",
		"lineNumber": 38,
		"nr_hex": "0x87",
		"types": [
			{
				"type": "unsigned int personality",
				"def": null
			}
		]
	},
	"136": {
		"name": "sys_ustat",
		"signature": "(unsigned dev, struct ustat __user *ubuf)",
		"file": "fs/statfs.c",
		"lineNumber": 232,
		"nr_hex": "0x88",
		"types": [
			{
				"type": "unsigned dev",
				"def": null
			},
			{
				"type": "struct ustat __user *ubuf",
				"def": {
					"line": 198,
					"file": "include/linux/types.h"
				}
			}
		]
	},
	"137": {
		"name": "sys_statfs",
		"signature": "(const char __user * path, struct statfs __user *buf)",
		"file": "fs/statfs.c",
		"lineNumber": 176,
		"nr_hex": "0x89",
		"types": [
			{
				"type": "const char __user * path",
				"def": null
			},
			{
				"type": "struct statfs __user *buf",
				"def": {
					"line": 23,
					"file": "arch/mips/include/uapi/asm/statfs.h"
				}
			}
		]
	},
	"138": {
		"name": "sys_fstatfs",
		"signature": "(unsigned int fd, struct statfs __user *buf)",
		"file": "fs/statfs.c",
		"lineNumber": 197,
		"nr_hex": "0x8a",
		"types": [
			{
				"type": "unsigned int fd",
				"def": null
			},
			{
				"type": "struct statfs __user *buf",
				"def": {
					"line": 23,
					"file": "arch/mips/include/uapi/asm/statfs.h"
				}
			}
		]
	},
	"139": {
		"name": "sys_sysfs",
		"signature": "(int option, unsigned long arg1, unsigned long arg2)",
		"file": "fs/filesystems.c",
		"lineNumber": 186,
		"nr_hex": "0x8b",
		"types": [
			{
				"type": "int option",
				"def": null
			},
			{
				"type": "unsigned long arg1",
				"def": null
			},
			{
				"type": "unsigned long arg2",
				"def": null
			}
		]
	},
	"140": {
		"name": "sys_getpriority",
		"signature": "(int which, int who)",
		"file": "kernel/sys.c",
		"lineNumber": 263,
		"nr_hex": "0x8c",
		"types": [
			{
				"type": "int which",
				"def": null
			},
			{
				"type": "int who",
				"def": null
			}
		]
	},
	"141": {
		"name": "sys_setpriority",
		"signature": "(int which, int who, int niceval)",
		"file": "kernel/sys.c",
		"lineNumber": 193,
		"nr_hex": "0x8d",
		"types": [
			{
				"type": "int which",
				"def": null
			},
			{
				"type": "int who",
				"def": null
			},
			{
				"type": "int niceval",
				"def": null
			}
		]
	},
	"142": {
		"name": "sys_sched_setparam",
		"signature": "(pid_t pid, struct sched_param __user *param)",
		"file": "kernel/sched/core.c",
		"lineNumber": 4540,
		"nr_hex": "0x8e",
		"types": [
			{
				"type": "pid_t pid",
				"def": null
			},
			{
				"type": "struct sched_param __user *param",
				"def": {
					"line": 7,
					"file": "include/uapi/linux/sched/types.h"
				}
			}
		]
	},
	"143": {
		"name": "sys_sched_getparam",
		"signature": "(pid_t pid, struct sched_param __user *param)",
		"file": "kernel/sched/core.c",
		"lineNumber": 4614,
		"nr_hex": "0x8f",
		"types": [
			{
				"type": "pid_t pid",
				"def": null
			},
			{
				"type": "struct sched_param __user *param",
				"def": {
					"line": 7,
					"file": "include/uapi/linux/sched/types.h"
				}
			}
		]
	},
	"144": {
		"name": "sys_sched_setscheduler",
		"signature": "(pid_t pid, int policy, struct sched_param __user *param)",
		"file": "kernel/sched/core.c",
		"lineNumber": 4525,
		"nr_hex": "0x90",
		"types": [
			{
				"type": "pid_t pid",
				"def": null
			},
			{
				"type": "int policy",
				"def": null
			},
			{
				"type": "struct sched_param __user *param",
				"def": {
					"line": 7,
					"file": "include/uapi/linux/sched/types.h"
				}
			}
		]
	},
	"145": {
		"name": "sys_sched_getscheduler",
		"signature": "(pid_t pid)",
		"file": "kernel/sched/core.c",
		"lineNumber": 4585,
		"nr_hex": "0x91",
		"types": [
			{
				"type": "pid_t pid",
				"def": null
			}
		]
	},
	"146": {
		"name": "sys_sched_get_priority_max",
		"signature": "(int policy)",
		"file": "kernel/sched/core.c",
		"lineNumber": 5154,
		"nr_hex": "0x92",
		"types": [
			{
				"type": "int policy",
				"def": null
			}
		]
	},
	"147": {
		"name": "sys_sched_get_priority_min",
		"signature": "(int policy)",
		"file": "kernel/sched/core.c",
		"lineNumber": 5181,
		"nr_hex": "0x93",
		"types": [
			{
				"type": "int policy",
				"def": null
			}
		]
	},
	"148": {
		"name": "sys_sched_rr_get_interval",
		"signature": "(pid_t pid, struct timespec __user *interval)",
		"file": "kernel/sched/core.c",
		"lineNumber": 5246,
		"nr_hex": "0x94",
		"types": [
			{
				"type": "pid_t pid",
				"def": null
			},
			{
				"type": "struct timespec __user *interval",
				"def": null
			}
		]
	},
	"149": {
		"name": "sys_mlock",
		"signature": "(unsigned long start, size_t len)",
		"file": "mm/mlock.c",
		"lineNumber": 716,
		"nr_hex": "0x95",
		"types": [
			{
				"type": "unsigned long start",
				"def": null
			},
			{
				"type": "size_t len",
				"def": null
			}
		]
	},
	"150": {
		"name": "sys_munlock",
		"signature": "(unsigned long start, size_t len)",
		"file": "mm/mlock.c",
		"lineNumber": 734,
		"nr_hex": "0x96",
		"types": [
			{
				"type": "unsigned long start",
				"def": null
			},
			{
				"type": "size_t len",
				"def": null
			}
		]
	},
	"151": {
		"name": "sys_mlockall",
		"signature": "(int flags)",
		"file": "mm/mlock.c",
		"lineNumber": 795,
		"nr_hex": "0x97",
		"types": [
			{
				"type": "int flags",
				"def": null
			}
		]
	},
	"152": {
		"name": "sys_munlockall",
		"signature": "(void)",
		"file": "mm/mlock.c",
		"lineNumber": 823,
		"nr_hex": "0x98",
		"types": []
	},
	"153": {
		"name": "sys_vhangup",
		"signature": "(void)",
		"file": "fs/open.c",
		"lineNumber": 1181,
		"nr_hex": "0x99",
		"types": []
	},
	"154": {
		"name": "sys_modify_ldt",
		"signature": "(int, void __user *, unsigned long)",
		"file": "arch/x86/kernel/ldt.c",
		"lineNumber": 553,
		"nr_hex": "0x9a",
		"types": [
			{
				"type": "int",
				"def": null
			},
			{
				"type": "void __user *",
				"def": null
			},
			{
				"type": "unsigned long",
				"def": null
			}
		]
	},
	"155": {
		"name": "sys_pivot_root",
		"signature": "(const char __user *new_root, const char __user *put_old)",
		"file": "fs/namespace.c",
		"lineNumber": 3082,
		"nr_hex": "0x9b",
		"types": [
			{
				"type": "const char __user *new_root",
				"def": null
			},
			{
				"type": "const char __user *put_old",
				"def": null
			}
		]
	},
	"156": {
		"name": "sys_sysctl",
		"signature": "(struct __sysctl_args __user *args)",
		"file": "kernel/sysctl_binary.c",
		"lineNumber": 1401,
		"nr_hex": "0x9c",
		"types": [
			{
				"type": "struct __sysctl_args __user *args",
				"def": {
					"line": 35,
					"file": "include/uapi/linux/sysctl.h"
				}
			}
		]
	},
	"157": {
		"name": "sys_prctl",
		"signature": "(int option, unsigned long arg2, unsigned long arg3, unsigned long arg4, unsigned long arg5)",
		"file": "kernel/sys.c",
		"lineNumber": 2261,
		"nr_hex": "0x9d",
		"types": [
			{
				"type": "int option",
				"def": null
			},
			{
				"type": "unsigned long arg2",
				"def": null
			},
			{
				"type": "unsigned long arg3",
				"def": null
			},
			{
				"type": "unsigned long arg4",
				"def": null
			},
			{
				"type": "unsigned long arg5",
				"def": null
			}
		]
	},
	"158": {},
	"159": {
		"name": "sys_adjtimex",
		"signature": "(struct timex __user *txc_p)",
		"file": "kernel/time/time.c",
		"lineNumber": 266,
		"nr_hex": "0x9f",
		"types": [
			{
				"type": "struct timex __user *txc_p",
				"def": {
					"line": 64,
					"file": "include/uapi/linux/timex.h"
				}
			}
		]
	},
	"160": {
		"name": "sys_setrlimit",
		"signature": "(unsigned int resource, struct rlimit __user *rlim)",
		"file": "kernel/sys.c",
		"lineNumber": 1659,
		"nr_hex": "0xa0",
		"types": [
			{
				"type": "unsigned int resource",
				"def": null
			},
			{
				"type": "struct rlimit __user *rlim",
				"def": null
			}
		]
	},
	"161": {
		"name": "sys_chroot",
		"signature": "(const char __user *filename)",
		"file": "fs/open.c",
		"lineNumber": 519,
		"nr_hex": "0xa1",
		"types": [
			{
				"type": "const char __user *filename",
				"def": null
			}
		]
	},
	"162": {
		"name": "sys_sync",
		"signature": "(void)",
		"file": "fs/sync.c",
		"lineNumber": 122,
		"nr_hex": "0xa2",
		"types": []
	},
	"163": {
		"name": "sys_acct",
		"signature": "(const char __user *name)",
		"file": "kernel/acct.c",
		"lineNumber": 273,
		"nr_hex": "0xa3",
		"types": [
			{
				"type": "const char __user *name",
				"def": null
			}
		]
	},
	"164": {
		"name": "sys_settimeofday",
		"signature": "(struct timeval __user *tv, struct timezone __user *tz)",
		"file": "kernel/time/time.c",
		"lineNumber": 200,
		"nr_hex": "0xa4",
		"types": [
			{
				"type": "struct timeval __user *tv",
				"def": {
					"line": 16,
					"file": "include/uapi/linux/time.h"
				}
			},
			{
				"type": "struct timezone __user *tz",
				"def": null
			}
		]
	},
	"165": {
		"name": "sys_mount",
		"signature": "(char __user *dev_name, char __user *dir_name, char __user *type, unsigned long flags, void __user *data)",
		"file": "fs/namespace.c",
		"lineNumber": 3026,
		"nr_hex": "0xa5",
		"types": [
			{
				"type": "char __user *dev_name",
				"def": null
			},
			{
				"type": "char __user *dir_name",
				"def": null
			},
			{
				"type": "char __user *type",
				"def": null
			},
			{
				"type": "unsigned long flags",
				"def": null
			},
			{
				"type": "void __user *data",
				"def": null
			}
		]
	},
	"166": {
		"name": "sys_umount",
		"signature": "(char __user *name, int flags)",
		"file": "fs/namespace.c",
		"lineNumber": 1669,
		"nr_hex": "0xa6",
		"types": [
			{
				"type": "char __user *name",
				"def": null
			},
			{
				"type": "int flags",
				"def": null
			}
		]
	},
	"167": {
		"name": "sys_swapon",
		"signature": "(const char __user *specialfile, int swap_flags)",
		"file": "mm/swapfile.c",
		"lineNumber": 3104,
		"nr_hex": "0xa7",
		"types": [
			{
				"type": "const char __user *specialfile",
				"def": null
			},
			{
				"type": "int swap_flags",
				"def": null
			}
		]
	},
	"168": {
		"name": "sys_swapoff",
		"signature": "(const char __user *specialfile)",
		"file": "mm/swapfile.c",
		"lineNumber": 2528,
		"nr_hex": "0xa8",
		"types": [
			{
				"type": "const char __user *specialfile",
				"def": null
			}
		]
	},
	"169": {
		"name": "sys_reboot",
		"signature": "(int magic1, int magic2, unsigned int cmd, void __user *arg)",
		"file": "kernel/reboot.c",
		"lineNumber": 307,
		"nr_hex": "0xa9",
		"types": [
			{
				"type": "int magic1",
				"def": null
			},
			{
				"type": "int magic2",
				"def": null
			},
			{
				"type": "unsigned int cmd",
				"def": null
			},
			{
				"type": "void __user *arg",
				"def": null
			}
		]
	},
	"170": {
		"name": "sys_sethostname",
		"signature": "(char __user *name, int len)",
		"file": "kernel/sys.c",
		"lineNumber": 1301,
		"nr_hex": "0xaa",
		"types": [
			{
				"type": "char __user *name",
				"def": null
			},
			{
				"type": "int len",
				"def": null
			}
		]
	},
	"171": {
		"name": "sys_setdomainname",
		"signature": "(char __user *name, int len)",
		"file": "kernel/sys.c",
		"lineNumber": 1354,
		"nr_hex": "0xab",
		"types": [
			{
				"type": "char __user *name",
				"def": null
			},
			{
				"type": "int len",
				"def": null
			}
		]
	},
	"172": {},
	"173": {
		"name": "sys_ioperm",
		"signature": "(unsigned long, unsigned long, int)",
		"file": "arch/x86/kernel/ioport.c",
		"lineNumber": 99,
		"nr_hex": "0xad",
		"types": [
			{
				"type": "unsigned long",
				"def": null
			},
			{
				"type": "unsigned long",
				"def": null
			},
			{
				"type": "int",
				"def": null
			}
		]
	},
	"174": {
		"name": "",
		"lineNumber": "",
		"file": "",
		"signature": "",
		"nr_hex": "0xae",
		"types": []
	},
	"175": {
		"name": "sys_init_module",
		"signature": "(void __user *umod, unsigned long len, const char __user *uargs)",
		"file": "kernel/module.c",
		"lineNumber": 3842,
		"nr_hex": "0xaf",
		"types": [
			{
				"type": "void __user *umod",
				"def": null
			},
			{
				"type": "unsigned long len",
				"def": null
			},
			{
				"type": "const char __user *uargs",
				"def": null
			}
		]
	},
	"176": {
		"name": "sys_delete_module",
		"signature": "(const char __user *name_user, unsigned int flags)",
		"file": "kernel/module.c",
		"lineNumber": 960,
		"nr_hex": "0xb0",
		"types": [
			{
				"type": "const char __user *name_user",
				"def": null
			},
			{
				"type": "unsigned int flags",
				"def": null
			}
		]
	},
	"177": {
		"name": "",
		"lineNumber": "",
		"file": "",
		"signature": "",
		"nr_hex": "0xb1",
		"types": []
	},
	"178": {
		"name": "",
		"lineNumber": "",
		"file": "",
		"signature": "",
		"nr_hex": "0xb2",
		"types": []
	},
	"179": {
		"name": "sys_quotactl",
		"signature": "(unsigned int cmd, const char __user *special, qid_t id, void __user *addr)",
		"file": "fs/quota/quota.c",
		"lineNumber": 890,
		"nr_hex": "0xb3",
		"types": [
			{
				"type": "unsigned int cmd",
				"def": null
			},
			{
				"type": "const char __user *special",
				"def": null
			},
			{
				"type": "qid_t id",
				"def": null
			},
			{
				"type": "void __user *addr",
				"def": null
			}
		]
	},
	"180": {
		"name": "",
		"lineNumber": "",
		"file": "",
		"signature": "",
		"nr_hex": "0xb4",
		"types": []
	},
	"181": {
		"name": "",
		"lineNumber": "",
		"file": "",
		"signature": "",
		"nr_hex": "0xb5",
		"types": []
	},
	"182": {
		"name": "",
		"lineNumber": "",
		"file": "",
		"signature": "",
		"nr_hex": "0xb6",
		"types": []
	},
	"183": {
		"name": "",
		"lineNumber": "",
		"file": "",
		"signature": "",
		"nr_hex": "0xb7",
		"types": []
	},
	"184": {
		"name": "",
		"lineNumber": "",
		"file": "",
		"signature": "",
		"nr_hex": "0xb8",
		"types": []
	},
	"185": {
		"name": "",
		"lineNumber": "",
		"file": "",
		"signature": "",
		"nr_hex": "0xb9",
		"types": []
	},
	"186": {
		"name": "sys_gettid",
		"signature": "(void)",
		"file": "kernel/sys.c",
		"lineNumber": 894,
		"nr_hex": "0xba",
		"types": []
	},
	"187": {
		"name": "sys_readahead",
		"signature": "(int fd, loff_t offset, size_t count)",
		"file": "mm/readahead.c",
		"lineNumber": 605,
		"nr_hex": "0xbb",
		"types": [
			{
				"type": "int fd",
				"def": null
			},
			{
				"type": "loff_t offset",
				"def": null
			},
			{
				"type": "size_t count",
				"def": null
			}
		]
	},
	"188": {
		"name": "sys_setxattr",
		"signature": "(const char __user *path, const char __user *name, const void __user *value, size_t size, int flags)",
		"file": "fs/xattr.c",
		"lineNumber": 480,
		"nr_hex": "0xbc",
		"types": [
			{
				"type": "const char __user *path",
				"def": null
			},
			{
				"type": "const char __user *name",
				"def": null
			},
			{
				"type": "const void __user *value",
				"def": null
			},
			{
				"type": "size_t size",
				"def": null
			},
			{
				"type": "int flags",
				"def": null
			}
		]
	},
	"189": {
		"name": "sys_lsetxattr",
		"signature": "(const char __user *path, const char __user *name, const void __user *value, size_t size, int flags)",
		"file": "fs/xattr.c",
		"lineNumber": 487,
		"nr_hex": "0xbd",
		"types": [
			{
				"type": "const char __user *path",
				"def": null
			},
			{
				"type": "const char __user *name",
				"def": null
			},
			{
				"type": "const void __user *value",
				"def": null
			},
			{
				"type": "size_t size",
				"def": null
			},
			{
				"type": "int flags",
				"def": null
			}
		]
	},
	"190": {
		"name": "sys_fsetxattr",
		"signature": "(int fd, const char __user *name, const void __user *value, size_t size, int flags)",
		"file": "fs/xattr.c",
		"lineNumber": 494,
		"nr_hex": "0xbe",
		"types": [
			{
				"type": "int fd",
				"def": null
			},
			{
				"type": "const char __user *name",
				"def": null
			},
			{
				"type": "const void __user *value",
				"def": null
			},
			{
				"type": "size_t size",
				"def": null
			},
			{
				"type": "int flags",
				"def": null
			}
		]
	},
	"191": {
		"name": "sys_getxattr",
		"signature": "(const char __user *path, const char __user *name, void __user *value, size_t size)",
		"file": "fs/xattr.c",
		"lineNumber": 574,
		"nr_hex": "0xbf",
		"types": [
			{
				"type": "const char __user *path",
				"def": null
			},
			{
				"type": "const char __user *name",
				"def": null
			},
			{
				"type": "void __user *value",
				"def": null
			},
			{
				"type": "size_t size",
				"def": null
			}
		]
	},
	"192": {
		"name": "sys_lgetxattr",
		"signature": "(const char __user *path, const char __user *name, void __user *value, size_t size)",
		"file": "fs/xattr.c",
		"lineNumber": 580,
		"nr_hex": "0xc0",
		"types": [
			{
				"type": "const char __user *path",
				"def": null
			},
			{
				"type": "const char __user *name",
				"def": null
			},
			{
				"type": "void __user *value",
				"def": null
			},
			{
				"type": "size_t size",
				"def": null
			}
		]
	},
	"193": {
		"name": "sys_fgetxattr",
		"signature": "(int fd, const char __user *name, void __user *value, size_t size)",
		"file": "fs/xattr.c",
		"lineNumber": 586,
		"nr_hex": "0xc1",
		"types": [
			{
				"type": "int fd",
				"def": null
			},
			{
				"type": "const char __user *name",
				"def": null
			},
			{
				"type": "void __user *value",
				"def": null
			},
			{
				"type": "size_t size",
				"def": null
			}
		]
	},
	"194": {
		"name": "sys_listxattr",
		"signature": "(const char __user *path, char __user *list, size_t size)",
		"file": "fs/xattr.c",
		"lineNumber": 650,
		"nr_hex": "0xc2",
		"types": [
			{
				"type": "const char __user *path",
				"def": null
			},
			{
				"type": "char __user *list",
				"def": null
			},
			{
				"type": "size_t size",
				"def": null
			}
		]
	},
	"195": {
		"name": "sys_llistxattr",
		"signature": "(const char __user *path, char __user *list, size_t size)",
		"file": "fs/xattr.c",
		"lineNumber": 656,
		"nr_hex": "0xc3",
		"types": [
			{
				"type": "const char __user *path",
				"def": null
			},
			{
				"type": "char __user *list",
				"def": null
			},
			{
				"type": "size_t size",
				"def": null
			}
		]
	},
	"196": {
		"name": "sys_flistxattr",
		"signature": "(int fd, char __user *list, size_t size)",
		"file": "fs/xattr.c",
		"lineNumber": 662,
		"nr_hex": "0xc4",
		"types": [
			{
				"type": "int fd",
				"def": null
			},
			{
				"type": "char __user *list",
				"def": null
			},
			{
				"type": "size_t size",
				"def": null
			}
		]
	},
	"197": {
		"name": "sys_removexattr",
		"signature": "(const char __user *path, const char __user *name)",
		"file": "fs/xattr.c",
		"lineNumber": 715,
		"nr_hex": "0xc5",
		"types": [
			{
				"type": "const char __user *path",
				"def": null
			},
			{
				"type": "const char __user *name",
				"def": null
			}
		]
	},
	"198": {
		"name": "sys_lremovexattr",
		"signature": "(const char __user *path, const char __user *name)",
		"file": "fs/xattr.c",
		"lineNumber": 721,
		"nr_hex": "0xc6",
		"types": [
			{
				"type": "const char __user *path",
				"def": null
			},
			{
				"type": "const char __user *name",
				"def": null
			}
		]
	},
	"199": {
		"name": "sys_fremovexattr",
		"signature": "(int fd, const char __user *name)",
		"file": "fs/xattr.c",
		"lineNumber": 727,
		"nr_hex": "0xc7",
		"types": [
			{
				"type": "int fd",
				"def": null
			},
			{
				"type": "const char __user *name",
				"def": null
			}
		]
	},
	"200": {
		"name": "sys_tkill",
		"signature": "(pid_t pid, int sig)",
		"file": "kernel/signal.c",
		"lineNumber": 3353,
		"nr_hex": "0xc8",
		"types": [
			{
				"type": "pid_t pid",
				"def": null
			},
			{
				"type": "int sig",
				"def": null
			}
		]
	},
	"201": {
		"name": "sys_time",
		"signature": "(time_t __user *tloc)",
		"file": "kernel/sys.c",
		"lineNumber": 953,
		"nr_hex": "0xc9",
		"types": [
			{
				"type": "time_t __user *tloc",
				"def": null
			}
		]
	},
	"202": {
		"name": "sys_futex",
		"signature": "(u32 __user *uaddr, int op, u32 val, struct timespec __user *utime, u32 __user *uaddr2, u32 val3)",
		"file": "kernel/futex.c",
		"lineNumber": 3675,
		"nr_hex": "0xca",
		"types": [
			{
				"type": "u32 __user *uaddr",
				"def": null
			},
			{
				"type": "int op",
				"def": null
			},
			{
				"type": "u32 val",
				"def": null
			},
			{
				"type": "struct timespec __user *utime",
				"def": null
			},
			{
				"type": "u32 __user *uaddr2",
				"def": null
			},
			{
				"type": "u32 val3",
				"def": null
			}
		]
	},
	"203": {
		"name": "sys_sched_setaffinity",
		"signature": "(pid_t pid, unsigned int len, unsigned long __user *user_mask_ptr)",
		"file": "kernel/sched/core.c",
		"lineNumber": 4843,
		"nr_hex": "0xcb",
		"types": [
			{
				"type": "pid_t pid",
				"def": null
			},
			{
				"type": "unsigned int len",
				"def": null
			},
			{
				"type": "unsigned long __user *user_mask_ptr",
				"def": null
			}
		]
	},
	"204": {
		"name": "sys_sched_getaffinity",
		"signature": "(pid_t pid, unsigned int len, unsigned long __user *user_mask_ptr)",
		"file": "kernel/sched/core.c",
		"lineNumber": 4895,
		"nr_hex": "0xcc",
		"types": [
			{
				"type": "pid_t pid",
				"def": null
			},
			{
				"type": "unsigned int len",
				"def": null
			},
			{
				"type": "unsigned long __user *user_mask_ptr",
				"def": null
			}
		]
	},
	"205": {
		"name": "",
		"lineNumber": "",
		"file": "",
		"signature": "",
		"nr_hex": "0xcd",
		"types": []
	},
	"206": {
		"name": "sys_io_setup",
		"signature": "(unsigned nr_reqs, aio_context_t __user *ctx)",
		"file": "fs/aio.c",
		"lineNumber": 1303,
		"nr_hex": "0xce",
		"types": [
			{
				"type": "unsigned nr_reqs",
				"def": null
			},
			{
				"type": "aio_context_t __user *ctx",
				"def": null
			}
		]
	},
	"207": {
		"name": "sys_io_destroy",
		"signature": "(aio_context_t ctx)",
		"file": "fs/aio.c",
		"lineNumber": 1372,
		"nr_hex": "0xcf",
		"types": [
			{
				"type": "aio_context_t ctx",
				"def": null
			}
		]
	},
	"208": {
		"name": "sys_io_getevents",
		"signature": "(aio_context_t ctx_id, long min_nr, long nr, struct io_event __user *events, struct timespec __user *timeout)",
		"file": "fs/aio.c",
		"lineNumber": 2064,
		"nr_hex": "0xd0",
		"types": [
			{
				"type": "aio_context_t ctx_id",
				"def": null
			},
			{
				"type": "long min_nr",
				"def": null
			},
			{
				"type": "long nr",
				"def": null
			},
			{
				"type": "struct io_event __user *events",
				"def": {
					"line": 58,
					"file": "include/uapi/linux/aio_abi.h"
				}
			},
			{
				"type": "struct timespec __user *timeout",
				"def": null
			}
		]
	},
	"209": {
		"name": "sys_io_submit",
		"signature": "(aio_context_t, long, struct iocb __user * __user *)",
		"file": "fs/aio.c",
		"lineNumber": 1900,
		"nr_hex": "0xd1",
		"types": [
			{
				"type": "aio_context_t",
				"def": null
			},
			{
				"type": "long",
				"def": null
			},
			{
				"type": "struct iocb __user * __user *",
				"def": null
			}
		]
	},
	"210": {
		"name": "sys_io_cancel",
		"signature": "(aio_context_t ctx_id, struct iocb __user *iocb, struct io_event __user *result)",
		"file": "fs/aio.c",
		"lineNumber": 1990,
		"nr_hex": "0xd2",
		"types": [
			{
				"type": "aio_context_t ctx_id",
				"def": null
			},
			{
				"type": "struct iocb __user *iocb",
				"def": null
			},
			{
				"type": "struct io_event __user *result",
				"def": {
					"line": 58,
					"file": "include/uapi/linux/aio_abi.h"
				}
			}
		]
	},
	"211": {
		"name": "",
		"lineNumber": "",
		"file": "",
		"signature": "",
		"nr_hex": "0xd3",
		"types": []
	},
	"212": {
		"name": "sys_lookup_dcookie",
		"signature": "(u64 cookie64, char __user *buf, size_t len)",
		"file": "fs/dcookies.c",
		"lineNumber": 206,
		"nr_hex": "0xd4",
		"types": [
			{
				"type": "u64 cookie64",
				"def": null
			},
			{
				"type": "char __user *buf",
				"def": null
			},
			{
				"type": "size_t len",
				"def": null
			}
		]
	},
	"213": {
		"name": "sys_epoll_create",
		"signature": "(int size)",
		"file": "fs/eventpoll.c",
		"lineNumber": 1994,
		"nr_hex": "0xd5",
		"types": [
			{
				"type": "int size",
				"def": null
			}
		]
	},
	"214": {
		"name": "",
		"lineNumber": "",
		"file": "",
		"signature": "",
		"nr_hex": "0xd6",
		"types": []
	},
	"215": {
		"name": "",
		"lineNumber": "",
		"file": "",
		"signature": "",
		"nr_hex": "0xd7",
		"types": []
	},
	"216": {
		"name": "sys_remap_file_pages",
		"signature": "(unsigned long start, unsigned long size, unsigned long prot, unsigned long pgoff, unsigned long flags)",
		"file": "mm/mmap.c",
		"lineNumber": 2821,
		"nr_hex": "0xd8",
		"types": [
			{
				"type": "unsigned long start",
				"def": null
			},
			{
				"type": "unsigned long size",
				"def": null
			},
			{
				"type": "unsigned long prot",
				"def": null
			},
			{
				"type": "unsigned long pgoff",
				"def": null
			},
			{
				"type": "unsigned long flags",
				"def": null
			}
		]
	},
	"217": {
		"name": "sys_getdents64",
		"signature": "(unsigned int fd, struct linux_dirent64 __user *dirent, unsigned int count)",
		"file": "fs/readdir.c",
		"lineNumber": 330,
		"nr_hex": "0xd9",
		"types": [
			{
				"type": "unsigned int fd",
				"def": null
			},
			{
				"type": "struct linux_dirent64 __user *dirent",
				"def": {
					"line": 5,
					"file": "include/linux/dirent.h"
				}
			},
			{
				"type": "unsigned int count",
				"def": null
			}
		]
	},
	"218": {
		"name": "sys_set_tid_address",
		"signature": "(int __user *tidptr)",
		"file": "kernel/fork.c",
		"lineNumber": 1563,
		"nr_hex": "0xda",
		"types": [
			{
				"type": "int __user *tidptr",
				"def": null
			}
		]
	},
	"219": {
		"name": "sys_restart_syscall",
		"signature": "(void)",
		"file": "kernel/signal.c",
		"lineNumber": 2713,
		"nr_hex": "0xdb",
		"types": []
	},
	"220": {
		"name": "sys_semtimedop",
		"signature": "(int semid, struct sembuf __user *sops, unsigned nsops, const struct __kernel_timespec __user *timeout)",
		"file": "ipc/sem.c",
		"lineNumber": 2208,
		"nr_hex": "0xdc",
		"types": [
			{
				"type": "int semid",
				"def": null
			},
			{
				"type": "struct sembuf __user *sops",
				"def": {
					"line": 40,
					"file": "include/uapi/linux/sem.h"
				}
			},
			{
				"type": "unsigned nsops",
				"def": null
			},
			{
				"type": "const struct __kernel_timespec __user *timeout",
				"def": null
			}
		]
	},
	"221": {
		"name": "sys_fadvise64",
		"signature": "(int fd, loff_t offset, size_t len, int advice)",
		"file": "arch/nds32/kernel/sys_nds32.c",
		"lineNumber": 21,
		"nr_hex": "0xdd",
		"types": [
			{
				"type": "int fd",
				"def": null
			},
			{
				"type": "loff_t offset",
				"def": null
			},
			{
				"type": "size_t len",
				"def": null
			},
			{
				"type": "int advice",
				"def": null
			}
		]
	},
	"222": {
		"name": "sys_timer_create",
		"signature": "(clockid_t which_clock, struct sigevent __user *timer_event_spec, timer_t __user * created_timer_id)",
		"file": "kernel/time/posix-timers.c",
		"lineNumber": 572,
		"nr_hex": "0xde",
		"types": [
			{
				"type": "clockid_t which_clock",
				"def": null
			},
			{
				"type": "struct sigevent __user *timer_event_spec",
				"def": {
					"line": 313,
					"file": "include/uapi/asm-generic/siginfo.h"
				}
			},
			{
				"type": "timer_t __user * created_timer_id",
				"def": null
			}
		]
	},
	"223": {
		"name": "sys_timer_settime",
		"signature": "(timer_t timer_id, int flags, const struct __kernel_itimerspec __user *new_setting, struct itimerspec __user *old_setting)",
		"file": "kernel/time/posix-timers.c",
		"lineNumber": 904,
		"nr_hex": "0xdf",
		"types": [
			{
				"type": "timer_t timer_id",
				"def": null
			},
			{
				"type": "int flags",
				"def": null
			},
			{
				"type": "const struct __kernel_itimerspec __user *new_setting",
				"def": null
			},
			{
				"type": "struct itimerspec __user *old_setting",
				"def": {
					"line": 35,
					"file": "include/uapi/linux/time.h"
				}
			}
		]
	},
	"224": {
		"name": "sys_timer_gettime",
		"signature": "(timer_t timer_id, struct __kernel_itimerspec __user *setting)",
		"file": "kernel/time/posix-timers.c",
		"lineNumber": 739,
		"nr_hex": "0xe0",
		"types": [
			{
				"type": "timer_t timer_id",
				"def": null
			},
			{
				"type": "struct __kernel_itimerspec __user *setting",
				"def": null
			}
		]
	},
	"225": {
		"name": "sys_timer_getoverrun",
		"signature": "(timer_t timer_id)",
		"file": "kernel/time/posix-timers.c",
		"lineNumber": 778,
		"nr_hex": "0xe1",
		"types": [
			{
				"type": "timer_t timer_id",
				"def": null
			}
		]
	},
	"226": {
		"name": "sys_timer_delete",
		"signature": "(timer_t timer_id)",
		"file": "kernel/time/posix-timers.c",
		"lineNumber": 970,
		"nr_hex": "0xe2",
		"types": [
			{
				"type": "timer_t timer_id",
				"def": null
			}
		]
	},
	"227": {
		"name": "sys_clock_settime",
		"signature": "(clockid_t which_clock, const struct __kernel_timespec __user *tp)",
		"file": "kernel/time/posix-stubs.c",
		"lineNumber": 61,
		"nr_hex": "0xe3",
		"types": [
			{
				"type": "clockid_t which_clock",
				"def": null
			},
			{
				"type": "const struct __kernel_timespec __user *tp",
				"def": null
			}
		]
	},
	"228": {
		"name": "sys_clock_gettime",
		"signature": "(clockid_t which_clock, struct __kernel_timespec __user *tp)",
		"file": "kernel/time/posix-stubs.c",
		"lineNumber": 92,
		"nr_hex": "0xe4",
		"types": [
			{
				"type": "clockid_t which_clock",
				"def": null
			},
			{
				"type": "struct __kernel_timespec __user *tp",
				"def": null
			}
		]
	},
	"229": {
		"name": "sys_clock_getres",
		"signature": "(clockid_t which_clock, struct __kernel_timespec __user *tp)",
		"file": "kernel/time/posix-stubs.c",
		"lineNumber": 107,
		"nr_hex": "0xe5",
		"types": [
			{
				"type": "clockid_t which_clock",
				"def": null
			},
			{
				"type": "struct __kernel_timespec __user *tp",
				"def": null
			}
		]
	},
	"230": {
		"name": "sys_clock_nanosleep",
		"signature": "(clockid_t which_clock, int flags, const struct __kernel_timespec __user *rqtp, struct __kernel_timespec __user *rmtp)",
		"file": "kernel/time/posix-stubs.c",
		"lineNumber": 126,
		"nr_hex": "0xe6",
		"types": [
			{
				"type": "clockid_t which_clock",
				"def": null
			},
			{
				"type": "int flags",
				"def": null
			},
			{
				"type": "const struct __kernel_timespec __user *rqtp",
				"def": null
			},
			{
				"type": "struct __kernel_timespec __user *rmtp",
				"def": null
			}
		]
	},
	"231": {
		"name": "sys_exit_group",
		"signature": "(int error_code)",
		"file": "kernel/exit.c",
		"lineNumber": 988,
		"nr_hex": "0xe7",
		"types": [
			{
				"type": "int error_code",
				"def": null
			}
		]
	},
	"232": {
		"name": "sys_epoll_wait",
		"signature": "(int epfd, struct epoll_event __user *events, int maxevents, int timeout)",
		"file": "fs/eventpoll.c",
		"lineNumber": 2205,
		"nr_hex": "0xe8",
		"types": [
			{
				"type": "int epfd",
				"def": null
			},
			{
				"type": "struct epoll_event __user *events",
				"def": {
					"line": 77,
					"file": "include/uapi/linux/eventpoll.h"
				}
			},
			{
				"type": "int maxevents",
				"def": null
			},
			{
				"type": "int timeout",
				"def": null
			}
		]
	},
	"233": {
		"name": "sys_epoll_ctl",
		"signature": "(int epfd, int op, int fd, struct epoll_event __user *event)",
		"file": "fs/eventpoll.c",
		"lineNumber": 2007,
		"nr_hex": "0xe9",
		"types": [
			{
				"type": "int epfd",
				"def": null
			},
			{
				"type": "int op",
				"def": null
			},
			{
				"type": "int fd",
				"def": null
			},
			{
				"type": "struct epoll_event __user *event",
				"def": {
					"line": 77,
					"file": "include/uapi/linux/eventpoll.h"
				}
			}
		]
	},
	"234": {
		"name": "sys_tgkill",
		"signature": "(pid_t tgid, pid_t pid, int sig)",
		"file": "kernel/signal.c",
		"lineNumber": 3337,
		"nr_hex": "0xea",
		"types": [
			{
				"type": "pid_t tgid",
				"def": null
			},
			{
				"type": "pid_t pid",
				"def": null
			},
			{
				"type": "int sig",
				"def": null
			}
		]
	},
	"235": {
		"name": "sys_utimes",
		"signature": "(char __user *filename, struct timeval __user *utimes)",
		"file": "fs/utimes.c",
		"lineNumber": 222,
		"nr_hex": "0xeb",
		"types": [
			{
				"type": "char __user *filename",
				"def": null
			},
			{
				"type": "struct timeval __user *utimes",
				"def": {
					"line": 16,
					"file": "include/uapi/linux/time.h"
				}
			}
		]
	},
	"236": {
		"name": "",
		"lineNumber": "",
		"file": "",
		"signature": "",
		"nr_hex": "0xec",
		"types": []
	},
	"237": {
		"name": "sys_mbind",
		"signature": "(unsigned long start, unsigned long len, unsigned long mode, const unsigned long __user *nmask, unsigned long maxnode, unsigned flags)",
		"file": "mm/mempolicy.c",
		"lineNumber": 1362,
		"nr_hex": "0xed",
		"types": [
			{
				"type": "unsigned long start",
				"def": null
			},
			{
				"type": "unsigned long len",
				"def": null
			},
			{
				"type": "unsigned long mode",
				"def": null
			},
			{
				"type": "const unsigned long __user *nmask",
				"def": null
			},
			{
				"type": "unsigned long maxnode",
				"def": null
			},
			{
				"type": "unsigned flags",
				"def": null
			}
		]
	},
	"238": {
		"name": "sys_set_mempolicy",
		"signature": "(int mode, const unsigned long __user *nmask, unsigned long maxnode)",
		"file": "mm/mempolicy.c",
		"lineNumber": 1389,
		"nr_hex": "0xee",
		"types": [
			{
				"type": "int mode",
				"def": null
			},
			{
				"type": "const unsigned long __user *nmask",
				"def": null
			},
			{
				"type": "unsigned long maxnode",
				"def": null
			}
		]
	},
	"239": {
		"name": "sys_get_mempolicy",
		"signature": "(int __user *policy, unsigned long __user *nmask, unsigned long maxnode, unsigned long addr, unsigned long flags)",
		"file": "mm/mempolicy.c",
		"lineNumber": 1523,
		"nr_hex": "0xef",
		"types": [
			{
				"type": "int __user *policy",
				"def": null
			},
			{
				"type": "unsigned long __user *nmask",
				"def": null
			},
			{
				"type": "unsigned long maxnode",
				"def": null
			},
			{
				"type": "unsigned long addr",
				"def": null
			},
			{
				"type": "unsigned long flags",
				"def": null
			}
		]
	},
	"240": {
		"name": "sys_mq_open",
		"signature": "(const char __user *name, int oflag, umode_t mode, struct mq_attr __user *attr)",
		"file": "ipc/mqueue.c",
		"lineNumber": 793,
		"nr_hex": "0xf0",
		"types": [
			{
				"type": "const char __user *name",
				"def": null
			},
			{
				"type": "int oflag",
				"def": null
			},
			{
				"type": "umode_t mode",
				"def": null
			},
			{
				"type": "struct mq_attr __user *attr",
				"def": {
					"line": 28,
					"file": "include/uapi/linux/mqueue.h"
				}
			}
		]
	},
	"241": {
		"name": "sys_mq_unlink",
		"signature": "(const char __user *name)",
		"file": "ipc/mqueue.c",
		"lineNumber": 803,
		"nr_hex": "0xf1",
		"types": [
			{
				"type": "const char __user *name",
				"def": null
			}
		]
	},
	"242": {
		"name": "sys_mq_timedsend",
		"signature": "(mqd_t mqdes, const char __user *msg_ptr, size_t msg_len, unsigned int msg_prio, const struct __kernel_timespec __user *abs_timeout)",
		"file": "ipc/mqueue.c",
		"lineNumber": 1129,
		"nr_hex": "0xf2",
		"types": [
			{
				"type": "mqd_t mqdes",
				"def": null
			},
			{
				"type": "const char __user *msg_ptr",
				"def": null
			},
			{
				"type": "size_t msg_len",
				"def": null
			},
			{
				"type": "unsigned int msg_prio",
				"def": null
			},
			{
				"type": "const struct __kernel_timespec __user *abs_timeout",
				"def": null
			}
		]
	},
	"243": {
		"name": "sys_mq_timedreceive",
		"signature": "(mqd_t mqdes, char __user *msg_ptr, size_t msg_len, unsigned int __user *msg_prio, const struct __kernel_timespec __user *abs_timeout)",
		"file": "ipc/mqueue.c",
		"lineNumber": 1143,
		"nr_hex": "0xf3",
		"types": [
			{
				"type": "mqd_t mqdes",
				"def": null
			},
			{
				"type": "char __user *msg_ptr",
				"def": null
			},
			{
				"type": "size_t msg_len",
				"def": null
			},
			{
				"type": "unsigned int __user *msg_prio",
				"def": null
			},
			{
				"type": "const struct __kernel_timespec __user *abs_timeout",
				"def": null
			}
		]
	},
	"244": {
		"name": "sys_mq_notify",
		"signature": "(mqd_t mqdes, const struct sigevent __user *notification)",
		"file": "ipc/mqueue.c",
		"lineNumber": 1288,
		"nr_hex": "0xf4",
		"types": [
			{
				"type": "mqd_t mqdes",
				"def": null
			},
			{
				"type": "const struct sigevent __user *notification",
				"def": {
					"line": 313,
					"file": "include/uapi/asm-generic/siginfo.h"
				}
			}
		]
	},
	"245": {
		"name": "sys_mq_getsetattr",
		"signature": "(mqd_t mqdes, const struct mq_attr __user *mqstat, struct mq_attr __user *omqstat)",
		"file": "ipc/mqueue.c",
		"lineNumber": 1344,
		"nr_hex": "0xf5",
		"types": [
			{
				"type": "mqd_t mqdes",
				"def": null
			},
			{
				"type": "const struct mq_attr __user *mqstat",
				"def": {
					"line": 28,
					"file": "include/uapi/linux/mqueue.h"
				}
			},
			{
				"type": "struct mq_attr __user *omqstat",
				"def": {
					"line": 28,
					"file": "include/uapi/linux/mqueue.h"
				}
			}
		]
	},
	"246": {
		"name": "sys_kexec_load",
		"signature": "(unsigned long entry, unsigned long nr_segments, struct kexec_segment __user *segments, unsigned long flags)",
		"file": "kernel/kexec.c",
		"lineNumber": 226,
		"nr_hex": "0xf6",
		"types": [
			{
				"type": "unsigned long entry",
				"def": null
			},
			{
				"type": "unsigned long nr_segments",
				"def": null
			},
			{
				"type": "struct kexec_segment __user *segments",
				"def": {
					"line": 73,
					"file": "include/linux/kexec.h"
				}
			},
			{
				"type": "unsigned long flags",
				"def": null
			}
		]
	},
	"247": {
		"name": "sys_waitid",
		"signature": "(int which, pid_t pid, struct siginfo __user *infop, int options, struct rusage __user *ru)",
		"file": "kernel/exit.c",
		"lineNumber": 1599,
		"nr_hex": "0xf7",
		"types": [
			{
				"type": "int which",
				"def": null
			},
			{
				"type": "pid_t pid",
				"def": null
			},
			{
				"type": "struct siginfo __user *infop",
				"def": null
			},
			{
				"type": "int options",
				"def": null
			},
			{
				"type": "struct rusage __user *ru",
				"def": {
					"line": 24,
					"file": "include/uapi/linux/resource.h"
				}
			}
		]
	},
	"248": {
		"name": "sys_add_key",
		"signature": "(const char __user *_type, const char __user *_description, const void __user *_payload, size_t plen, key_serial_t destringid)",
		"file": "security/keys/keyctl.c",
		"lineNumber": 63,
		"nr_hex": "0xf8",
		"types": [
			{
				"type": "const char __user *_type",
				"def": null
			},
			{
				"type": "const char __user *_description",
				"def": null
			},
			{
				"type": "const void __user *_payload",
				"def": null
			},
			{
				"type": "size_t plen",
				"def": null
			},
			{
				"type": "key_serial_t destringid",
				"def": null
			}
		]
	},
	"249": {
		"name": "sys_request_key",
		"signature": "(const char __user *_type, const char __user *_description, const char __user *_callout_info, key_serial_t destringid)",
		"file": "security/keys/keyctl.c",
		"lineNumber": 159,
		"nr_hex": "0xf9",
		"types": [
			{
				"type": "const char __user *_type",
				"def": null
			},
			{
				"type": "const char __user *_description",
				"def": null
			},
			{
				"type": "const char __user *_callout_info",
				"def": null
			},
			{
				"type": "key_serial_t destringid",
				"def": null
			}
		]
	},
	"250": {
		"name": "sys_keyctl",
		"signature": "(int cmd, unsigned long arg2, unsigned long arg3, unsigned long arg4, unsigned long arg5)",
		"file": "security/keys/keyctl.c",
		"lineNumber": 1638,
		"nr_hex": "0xfa",
		"types": [
			{
				"type": "int cmd",
				"def": null
			},
			{
				"type": "unsigned long arg2",
				"def": null
			},
			{
				"type": "unsigned long arg3",
				"def": null
			},
			{
				"type": "unsigned long arg4",
				"def": null
			},
			{
				"type": "unsigned long arg5",
				"def": null
			}
		]
	},
	"251": {
		"name": "sys_ioprio_set",
		"signature": "(int which, int who, int ioprio)",
		"file": "block/ioprio.c",
		"lineNumber": 93,
		"nr_hex": "0xfb",
		"types": [
			{
				"type": "int which",
				"def": null
			},
			{
				"type": "int who",
				"def": null
			},
			{
				"type": "int ioprio",
				"def": null
			}
		]
	},
	"252": {
		"name": "sys_ioprio_get",
		"signature": "(int which, int who)",
		"file": "block/ioprio.c",
		"lineNumber": 185,
		"nr_hex": "0xfc",
		"types": [
			{
				"type": "int which",
				"def": null
			},
			{
				"type": "int who",
				"def": null
			}
		]
	},
	"253": {
		"name": "sys_inotify_init",
		"signature": "(void)",
		"file": "fs/notify/inotify/inotify_user.c",
		"lineNumber": 694,
		"nr_hex": "0xfd",
		"types": []
	},
	"254": {
		"name": "sys_inotify_add_watch",
		"signature": "(int fd, const char __user *path, u32 mask)",
		"file": "fs/notify/inotify/inotify_user.c",
		"lineNumber": 699,
		"nr_hex": "0xfe",
		"types": [
			{
				"type": "int fd",
				"def": null
			},
			{
				"type": "const char __user *path",
				"def": null
			},
			{
				"type": "u32 mask",
				"def": null
			}
		]
	},
	"255": {
		"name": "sys_inotify_rm_watch",
		"signature": "(int fd, __s32 wd)",
		"file": "fs/notify/inotify/inotify_user.c",
		"lineNumber": 762,
		"nr_hex": "0xff",
		"types": [
			{
				"type": "int fd",
				"def": null
			},
			{
				"type": "__s32 wd",
				"def": null
			}
		]
	},
	"256": {
		"name": "sys_migrate_pages",
		"signature": "(pid_t pid, unsigned long maxnode, const unsigned long __user *from, const unsigned long __user *to)",
		"file": "mm/mempolicy.c",
		"lineNumber": 1487,
		"nr_hex": "0x100",
		"types": [
			{
				"type": "pid_t pid",
				"def": null
			},
			{
				"type": "unsigned long maxnode",
				"def": null
			},
			{
				"type": "const unsigned long __user *from",
				"def": null
			},
			{
				"type": "const unsigned long __user *to",
				"def": null
			}
		]
	},
	"257": {
		"name": "sys_openat",
		"signature": "(int dfd, const char __user *filename, int flags, umode_t mode)",
		"file": "fs/open.c",
		"lineNumber": 1090,
		"nr_hex": "0x101",
		"types": [
			{
				"type": "int dfd",
				"def": null
			},
			{
				"type": "const char __user *filename",
				"def": null
			},
			{
				"type": "int flags",
				"def": null
			},
			{
				"type": "umode_t mode",
				"def": null
			}
		]
	},
	"258": {
		"name": "sys_mkdirat",
		"signature": "(int dfd, const char __user * pathname, umode_t mode)",
		"file": "fs/namei.c",
		"lineNumber": 3848,
		"nr_hex": "0x102",
		"types": [
			{
				"type": "int dfd",
				"def": null
			},
			{
				"type": "const char __user * pathname",
				"def": null
			},
			{
				"type": "umode_t mode",
				"def": null
			}
		]
	},
	"259": {
		"name": "sys_mknodat",
		"signature": "(int dfd, const char __user * filename, umode_t mode, unsigned dev)",
		"file": "fs/namei.c",
		"lineNumber": 3786,
		"nr_hex": "0x103",
		"types": [
			{
				"type": "int dfd",
				"def": null
			},
			{
				"type": "const char __user * filename",
				"def": null
			},
			{
				"type": "umode_t mode",
				"def": null
			},
			{
				"type": "unsigned dev",
				"def": null
			}
		]
	},
	"260": {
		"name": "sys_fchownat",
		"signature": "(int dfd, const char __user *filename, uid_t user, gid_t group, int flag)",
		"file": "fs/open.c",
		"lineNumber": 674,
		"nr_hex": "0x104",
		"types": [
			{
				"type": "int dfd",
				"def": null
			},
			{
				"type": "const char __user *filename",
				"def": null
			},
			{
				"type": "uid_t user",
				"def": null
			},
			{
				"type": "gid_t group",
				"def": null
			},
			{
				"type": "int flag",
				"def": null
			}
		]
	},
	"261": {
		"name": "sys_futimesat",
		"signature": "(int dfd, const char __user *filename, struct timeval __user *utimes)",
		"file": "fs/utimes.c",
		"lineNumber": 216,
		"nr_hex": "0x105",
		"types": [
			{
				"type": "int dfd",
				"def": null
			},
			{
				"type": "const char __user *filename",
				"def": null
			},
			{
				"type": "struct timeval __user *utimes",
				"def": {
					"line": 16,
					"file": "include/uapi/linux/time.h"
				}
			}
		]
	},
	"262": {
		"name": "sys_newfstatat",
		"signature": "(int dfd, const char __user *filename, struct stat __user *statbuf, int flag)",
		"file": "fs/stat.c",
		"lineNumber": 358,
		"nr_hex": "0x106",
		"types": [
			{
				"type": "int dfd",
				"def": null
			},
			{
				"type": "const char __user *filename",
				"def": null
			},
			{
				"type": "struct stat __user *statbuf",
				"def": {
					"line": 5,
					"file": "arch/alpha/include/uapi/asm/stat.h"
				}
			},
			{
				"type": "int flag",
				"def": null
			}
		]
	},
	"263": {
		"name": "sys_unlinkat",
		"signature": "(int dfd, const char __user * pathname, int flag)",
		"file": "fs/namei.c",
		"lineNumber": 4096,
		"nr_hex": "0x107",
		"types": [
			{
				"type": "int dfd",
				"def": null
			},
			{
				"type": "const char __user * pathname",
				"def": null
			},
			{
				"type": "int flag",
				"def": null
			}
		]
	},
	"264": {
		"name": "sys_renameat",
		"signature": "(int olddfd, const char __user * oldname, int newdfd, const char __user * newname)",
		"file": "fs/namei.c",
		"lineNumber": 4664,
		"nr_hex": "0x108",
		"types": [
			{
				"type": "int olddfd",
				"def": null
			},
			{
				"type": "const char __user * oldname",
				"def": null
			},
			{
				"type": "int newdfd",
				"def": null
			},
			{
				"type": "const char __user * newname",
				"def": null
			}
		]
	},
	"265": {
		"name": "sys_linkat",
		"signature": "(int olddfd, const char __user *oldname, int newdfd, const char __user *newname, int flags)",
		"file": "fs/namei.c",
		"lineNumber": 4329,
		"nr_hex": "0x109",
		"types": [
			{
				"type": "int olddfd",
				"def": null
			},
			{
				"type": "const char __user *oldname",
				"def": null
			},
			{
				"type": "int newdfd",
				"def": null
			},
			{
				"type": "const char __user *newname",
				"def": null
			},
			{
				"type": "int flags",
				"def": null
			}
		]
	},
	"266": {
		"name": "sys_symlinkat",
		"signature": "(const char __user * oldname, int newdfd, const char __user * newname)",
		"file": "fs/namei.c",
		"lineNumber": 4164,
		"nr_hex": "0x10a",
		"types": [
			{
				"type": "const char __user * oldname",
				"def": null
			},
			{
				"type": "int newdfd",
				"def": null
			},
			{
				"type": "const char __user * newname",
				"def": null
			}
		]
	},
	"267": {
		"name": "sys_readlinkat",
		"signature": "(int dfd, const char __user *path, char __user *buf, int bufsiz)",
		"file": "fs/stat.c",
		"lineNumber": 418,
		"nr_hex": "0x10b",
		"types": [
			{
				"type": "int dfd",
				"def": null
			},
			{
				"type": "const char __user *path",
				"def": null
			},
			{
				"type": "char __user *buf",
				"def": null
			},
			{
				"type": "int bufsiz",
				"def": null
			}
		]
	},
	"268": {
		"name": "sys_fchmodat",
		"signature": "(int dfd, const char __user * filename, umode_t mode)",
		"file": "fs/open.c",
		"lineNumber": 589,
		"nr_hex": "0x10c",
		"types": [
			{
				"type": "int dfd",
				"def": null
			},
			{
				"type": "const char __user * filename",
				"def": null
			},
			{
				"type": "umode_t mode",
				"def": null
			}
		]
	},
	"269": {
		"name": "sys_faccessat",
		"signature": "(int dfd, const char __user *filename, int mode)",
		"file": "fs/open.c",
		"lineNumber": 423,
		"nr_hex": "0x10d",
		"types": [
			{
				"type": "int dfd",
				"def": null
			},
			{
				"type": "const char __user *filename",
				"def": null
			},
			{
				"type": "int mode",
				"def": null
			}
		]
	},
	"270": {
		"name": "sys_pselect6",
		"signature": "(int n, fd_set __user *inp, fd_set __user *outp, fd_set __user *exp, struct timespec __user *tsp, void __user *sig)",
		"file": "fs/select.c",
		"lineNumber": 757,
		"nr_hex": "0x10e",
		"types": [
			{
				"type": "int n",
				"def": null
			},
			{
				"type": "fd_set __user *inp",
				"def": null
			},
			{
				"type": "fd_set __user *outp",
				"def": null
			},
			{
				"type": "fd_set __user *exp",
				"def": null
			},
			{
				"type": "struct timespec __user *tsp",
				"def": null
			},
			{
				"type": "void __user *sig",
				"def": null
			}
		]
	},
	"271": {
		"name": "sys_ppoll",
		"signature": "(struct pollfd __user *ufds, unsigned int nfds, struct timespec __user *tsp, const sigset_t __user *sigmask, size_t sigsetsize)",
		"file": "fs/select.c",
		"lineNumber": 1047,
		"nr_hex": "0x10f",
		"types": [
			{
				"type": "struct pollfd __user *ufds",
				"def": {
					"line": 36,
					"file": "include/uapi/asm-generic/poll.h"
				}
			},
			{
				"type": "unsigned int nfds",
				"def": null
			},
			{
				"type": "struct timespec __user *tsp",
				"def": null
			},
			{
				"type": "const sigset_t __user *sigmask",
				"def": null
			},
			{
				"type": "size_t sigsetsize",
				"def": null
			}
		]
	},
	"272": {
		"name": "sys_unshare",
		"signature": "(unsigned long unshare_flags)",
		"file": "kernel/fork.c",
		"lineNumber": 2591,
		"nr_hex": "0x110",
		"types": [
			{
				"type": "unsigned long unshare_flags",
				"def": null
			}
		]
	},
	"273": {
		"name": "sys_set_robust_list",
		"signature": "(struct robust_list_head __user *head, size_t len)",
		"file": "kernel/futex.c",
		"lineNumber": 3396,
		"nr_hex": "0x111",
		"types": [
			{
				"type": "struct robust_list_head __user *head",
				"def": {
					"line": 70,
					"file": "include/uapi/linux/futex.h"
				}
			},
			{
				"type": "size_t len",
				"def": null
			}
		]
	},
	"274": {
		"name": "sys_get_robust_list",
		"signature": "(int pid, struct robust_list_head __user * __user *head_ptr, size_t __user *len_ptr)",
		"file": "kernel/futex.c",
		"lineNumber": 3418,
		"nr_hex": "0x112",
		"types": [
			{
				"type": "int pid",
				"def": null
			},
			{
				"type": "struct robust_list_head __user * __user *head_ptr",
				"def": {
					"line": 70,
					"file": "include/uapi/linux/futex.h"
				}
			},
			{
				"type": "size_t __user *len_ptr",
				"def": null
			}
		]
	},
	"275": {
		"name": "sys_splice",
		"signature": "(int fd_in, loff_t __user *off_in, int fd_out, loff_t __user *off_out, size_t len, unsigned int flags)",
		"file": "fs/splice.c",
		"lineNumber": 1395,
		"nr_hex": "0x113",
		"types": [
			{
				"type": "int fd_in",
				"def": null
			},
			{
				"type": "loff_t __user *off_in",
				"def": null
			},
			{
				"type": "int fd_out",
				"def": null
			},
			{
				"type": "loff_t __user *off_out",
				"def": null
			},
			{
				"type": "size_t len",
				"def": null
			},
			{
				"type": "unsigned int flags",
				"def": null
			}
		]
	},
	"276": {
		"name": "sys_tee",
		"signature": "(int fdin, int fdout, size_t len, unsigned int flags)",
		"file": "fs/splice.c",
		"lineNumber": 1743,
		"nr_hex": "0x114",
		"types": [
			{
				"type": "int fdin",
				"def": null
			},
			{
				"type": "int fdout",
				"def": null
			},
			{
				"type": "size_t len",
				"def": null
			},
			{
				"type": "unsigned int flags",
				"def": null
			}
		]
	},
	"277": {
		"name": "sys_sync_file_range",
		"signature": "(int fd, loff_t offset, loff_t nbytes, unsigned int flags)",
		"file": "fs/sync.c",
		"lineNumber": 363,
		"nr_hex": "0x115",
		"types": [
			{
				"type": "int fd",
				"def": null
			},
			{
				"type": "loff_t offset",
				"def": null
			},
			{
				"type": "loff_t nbytes",
				"def": null
			},
			{
				"type": "unsigned int flags",
				"def": null
			}
		]
	},
	"278": {
		"name": "sys_vmsplice",
		"signature": "(int fd, const struct iovec __user *iov, unsigned long nr_segs, unsigned int flags)",
		"file": "fs/splice.c",
		"lineNumber": 1343,
		"nr_hex": "0x116",
		"types": [
			{
				"type": "int fd",
				"def": null
			},
			{
				"type": "const struct iovec __user *iov",
				"def": null
			},
			{
				"type": "unsigned long nr_segs",
				"def": null
			},
			{
				"type": "unsigned int flags",
				"def": null
			}
		]
	},
	"279": {
		"name": "sys_move_pages",
		"signature": "(pid_t pid, unsigned long nr_pages, const void __user * __user *pages, const int __user *nodes, int __user *status, int flags)",
		"file": "mm/migrate.c",
		"lineNumber": 1808,
		"nr_hex": "0x117",
		"types": [
			{
				"type": "pid_t pid",
				"def": null
			},
			{
				"type": "unsigned long nr_pages",
				"def": null
			},
			{
				"type": "const void __user * __user *pages",
				"def": null
			},
			{
				"type": "const int __user *nodes",
				"def": null
			},
			{
				"type": "int __user *status",
				"def": null
			},
			{
				"type": "int flags",
				"def": null
			}
		]
	},
	"280": {
		"name": "sys_utimensat",
		"signature": "(int dfd, const char __user *filename, struct timespec __user *utimes, int flags)",
		"file": "fs/utimes.c",
		"lineNumber": 168,
		"nr_hex": "0x118",
		"types": [
			{
				"type": "int dfd",
				"def": null
			},
			{
				"type": "const char __user *filename",
				"def": null
			},
			{
				"type": "struct timespec __user *utimes",
				"def": null
			},
			{
				"type": "int flags",
				"def": null
			}
		]
	},
	"281": {
		"name": "sys_epoll_pwait",
		"signature": "(int epfd, struct epoll_event __user *events, int maxevents, int timeout, const sigset_t __user *sigmask, size_t sigsetsize)",
		"file": "fs/eventpoll.c",
		"lineNumber": 2215,
		"nr_hex": "0x119",
		"types": [
			{
				"type": "int epfd",
				"def": null
			},
			{
				"type": "struct epoll_event __user *events",
				"def": {
					"line": 77,
					"file": "include/uapi/linux/eventpoll.h"
				}
			},
			{
				"type": "int maxevents",
				"def": null
			},
			{
				"type": "int timeout",
				"def": null
			},
			{
				"type": "const sigset_t __user *sigmask",
				"def": null
			},
			{
				"type": "size_t sigsetsize",
				"def": null
			}
		]
	},
	"282": {
		"name": "sys_signalfd",
		"signature": "(int ufd, sigset_t __user *user_mask, size_t sizemask)",
		"file": "fs/signalfd.c",
		"lineNumber": 322,
		"nr_hex": "0x11a",
		"types": [
			{
				"type": "int ufd",
				"def": null
			},
			{
				"type": "sigset_t __user *user_mask",
				"def": null
			},
			{
				"type": "size_t sizemask",
				"def": null
			}
		]
	},
	"283": {
		"name": "sys_timerfd_create",
		"signature": "(int clockid, int flags)",
		"file": "fs/timerfd.c",
		"lineNumber": 387,
		"nr_hex": "0x11b",
		"types": [
			{
				"type": "int clockid",
				"def": null
			},
			{
				"type": "int flags",
				"def": null
			}
		]
	},
	"284": {
		"name": "sys_eventfd",
		"signature": "(unsigned int count)",
		"file": "fs/eventfd.c",
		"lineNumber": 417,
		"nr_hex": "0x11c",
		"types": [
			{
				"type": "unsigned int count",
				"def": null
			}
		]
	},
	"285": {
		"name": "sys_fallocate",
		"signature": "(int fd, int mode, loff_t offset, loff_t len)",
		"file": "fs/open.c",
		"lineNumber": 337,
		"nr_hex": "0x11d",
		"types": [
			{
				"type": "int fd",
				"def": null
			},
			{
				"type": "int mode",
				"def": null
			},
			{
				"type": "loff_t offset",
				"def": null
			},
			{
				"type": "loff_t len",
				"def": null
			}
		]
	},
	"286": {
		"name": "sys_timerfd_settime",
		"signature": "(int ufd, int flags, const struct __kernel_itimerspec __user *utmr, struct __kernel_itimerspec __user *otmr)",
		"file": "fs/timerfd.c",
		"lineNumber": 535,
		"nr_hex": "0x11e",
		"types": [
			{
				"type": "int ufd",
				"def": null
			},
			{
				"type": "int flags",
				"def": null
			},
			{
				"type": "const struct __kernel_itimerspec __user *utmr",
				"def": null
			},
			{
				"type": "struct __kernel_itimerspec __user *otmr",
				"def": null
			}
		]
	},
	"287": {
		"name": "sys_timerfd_gettime",
		"signature": "(int ufd, struct __kernel_itimerspec __user *otmr)",
		"file": "fs/timerfd.c",
		"lineNumber": 553,
		"nr_hex": "0x11f",
		"types": [
			{
				"type": "int ufd",
				"def": null
			},
			{
				"type": "struct __kernel_itimerspec __user *otmr",
				"def": null
			}
		]
	},
	"288": {
		"name": "sys_accept4",
		"signature": "(int, struct sockaddr __user *, int __user *, int)",
		"file": "net/socket.c",
		"lineNumber": 1621,
		"nr_hex": "0x120",
		"types": [
			{
				"type": "int",
				"def": null
			},
			{
				"type": "struct sockaddr __user *",
				"def": null
			},
			{
				"type": "int __user *",
				"def": null
			},
			{
				"type": "int",
				"def": null
			}
		]
	},
	"289": {
		"name": "sys_signalfd4",
		"signature": "(int ufd, sigset_t __user *user_mask, size_t sizemask, int flags)",
		"file": "fs/signalfd.c",
		"lineNumber": 311,
		"nr_hex": "0x121",
		"types": [
			{
				"type": "int ufd",
				"def": null
			},
			{
				"type": "sigset_t __user *user_mask",
				"def": null
			},
			{
				"type": "size_t sizemask",
				"def": null
			},
			{
				"type": "int flags",
				"def": null
			}
		]
	},
	"290": {
		"name": "sys_eventfd2",
		"signature": "(unsigned int count, int flags)",
		"file": "fs/eventfd.c",
		"lineNumber": 412,
		"nr_hex": "0x122",
		"types": [
			{
				"type": "unsigned int count",
				"def": null
			},
			{
				"type": "int flags",
				"def": null
			}
		]
	},
	"291": {
		"name": "sys_epoll_create1",
		"signature": "(int flags)",
		"file": "fs/eventpoll.c",
		"lineNumber": 1989,
		"nr_hex": "0x123",
		"types": [
			{
				"type": "int flags",
				"def": null
			}
		]
	},
	"292": {
		"name": "sys_dup3",
		"signature": "(unsigned int oldfd, unsigned int newfd, int flags)",
		"file": "fs/file.c",
		"lineNumber": 909,
		"nr_hex": "0x124",
		"types": [
			{
				"type": "unsigned int oldfd",
				"def": null
			},
			{
				"type": "unsigned int newfd",
				"def": null
			},
			{
				"type": "int flags",
				"def": null
			}
		]
	},
	"293": {
		"name": "sys_pipe2",
		"signature": "(int __user *fildes, int flags)",
		"file": "fs/pipe.c",
		"lineNumber": 859,
		"nr_hex": "0x125",
		"types": [
			{
				"type": "int __user *fildes",
				"def": null
			},
			{
				"type": "int flags",
				"def": null
			}
		]
	},
	"294": {
		"name": "sys_inotify_init1",
		"signature": "(int flags)",
		"file": "fs/notify/inotify/inotify_user.c",
		"lineNumber": 689,
		"nr_hex": "0x126",
		"types": [
			{
				"type": "int flags",
				"def": null
			}
		]
	},
	"295": {
		"name": "sys_preadv",
		"signature": "(unsigned long fd, const struct iovec __user *vec, unsigned long vlen, unsigned long pos_l, unsigned long pos_h)",
		"file": "fs/read_write.c",
		"lineNumber": 1116,
		"nr_hex": "0x127",
		"types": [
			{
				"type": "unsigned long fd",
				"def": null
			},
			{
				"type": "const struct iovec __user *vec",
				"def": null
			},
			{
				"type": "unsigned long vlen",
				"def": null
			},
			{
				"type": "unsigned long pos_l",
				"def": null
			},
			{
				"type": "unsigned long pos_h",
				"def": null
			}
		]
	},
	"296": {
		"name": "sys_pwritev",
		"signature": "(unsigned long fd, const struct iovec __user *vec, unsigned long vlen, unsigned long pos_l, unsigned long pos_h)",
		"file": "fs/read_write.c",
		"lineNumber": 1136,
		"nr_hex": "0x128",
		"types": [
			{
				"type": "unsigned long fd",
				"def": null
			},
			{
				"type": "const struct iovec __user *vec",
				"def": null
			},
			{
				"type": "unsigned long vlen",
				"def": null
			},
			{
				"type": "unsigned long pos_l",
				"def": null
			},
			{
				"type": "unsigned long pos_h",
				"def": null
			}
		]
	},
	"297": {
		"name": "sys_rt_tgsigqueueinfo",
		"signature": "(pid_t tgid, pid_t pid, int sig, siginfo_t __user *uinfo)",
		"file": "kernel/signal.c",
		"lineNumber": 3424,
		"nr_hex": "0x129",
		"types": [
			{
				"type": "pid_t tgid",
				"def": null
			},
			{
				"type": "pid_t pid",
				"def": null
			},
			{
				"type": "int sig",
				"def": null
			},
			{
				"type": "siginfo_t __user *uinfo",
				"def": null
			}
		]
	},
	"298": {
		"name": "sys_perf_event_open",
		"signature": "( struct perf_event_attr __user *attr_uptr, pid_t pid, int cpu, int group_fd, unsigned long flags)",
		"file": "kernel/events/core.c",
		"lineNumber": 10443,
		"nr_hex": "0x12a",
		"types": [
			{
				"type": "struct perf_event_attr __user *attr_uptr",
				"def": {
					"line": 310,
					"file": "include/uapi/linux/perf_event.h"
				}
			},
			{
				"type": "pid_t pid",
				"def": null
			},
			{
				"type": "int cpu",
				"def": null
			},
			{
				"type": "int group_fd",
				"def": null
			},
			{
				"type": "unsigned long flags",
				"def": null
			}
		]
	},
	"299": {
		"name": "sys_recvmmsg",
		"signature": "(int fd, struct mmsghdr __user *msg, unsigned int vlen, unsigned flags, struct timespec __user *timeout)",
		"file": "net/socket.c",
		"lineNumber": 2479,
		"nr_hex": "0x12b",
		"types": [
			{
				"type": "int fd",
				"def": null
			},
			{
				"type": "struct mmsghdr __user *msg",
				"def": {
					"line": 69,
					"file": "include/linux/socket.h"
				}
			},
			{
				"type": "unsigned int vlen",
				"def": null
			},
			{
				"type": "unsigned flags",
				"def": null
			},
			{
				"type": "struct timespec __user *timeout",
				"def": null
			}
		]
	},
	"300": {
		"name": "sys_fanotify_init",
		"signature": "(unsigned int flags, unsigned int event_f_flags)",
		"file": "fs/notify/fanotify/fanotify_user.c",
		"lineNumber": 682,
		"nr_hex": "0x12c",
		"types": [
			{
				"type": "unsigned int flags",
				"def": null
			},
			{
				"type": "unsigned int event_f_flags",
				"def": null
			}
		]
	},
	"301": {
		"name": "sys_fanotify_mark",
		"signature": "(int fanotify_fd, unsigned int flags, u64 mask, int fd, const char __user *pathname)",
		"file": "fs/notify/fanotify/fanotify_user.c",
		"lineNumber": 907,
		"nr_hex": "0x12d",
		"types": [
			{
				"type": "int fanotify_fd",
				"def": null
			},
			{
				"type": "unsigned int flags",
				"def": null
			},
			{
				"type": "u64 mask",
				"def": null
			},
			{
				"type": "int fd",
				"def": null
			},
			{
				"type": "const char __user *pathname",
				"def": null
			}
		]
	},
	"302": {
		"name": "sys_prlimit64",
		"signature": "(pid_t pid, unsigned int resource, const struct rlimit64 __user *new_rlim, struct rlimit64 __user *old_rlim)",
		"file": "kernel/sys.c",
		"lineNumber": 1612,
		"nr_hex": "0x12e",
		"types": [
			{
				"type": "pid_t pid",
				"def": null
			},
			{
				"type": "unsigned int resource",
				"def": null
			},
			{
				"type": "const struct rlimit64 __user *new_rlim",
				"def": {
					"line": 50,
					"file": "include/uapi/linux/resource.h"
				}
			},
			{
				"type": "struct rlimit64 __user *old_rlim",
				"def": {
					"line": 50,
					"file": "include/uapi/linux/resource.h"
				}
			}
		]
	},
	"303": {
		"name": "sys_name_to_handle_at",
		"signature": "(int dfd, const char __user *name, struct file_handle __user *handle, int __user *mnt_id, int flag)",
		"file": "fs/fhandle.c",
		"lineNumber": 93,
		"nr_hex": "0x12f",
		"types": [
			{
				"type": "int dfd",
				"def": null
			},
			{
				"type": "const char __user *name",
				"def": null
			},
			{
				"type": "struct file_handle __user *handle",
				"def": {
					"line": 932,
					"file": "include/linux/fs.h"
				}
			},
			{
				"type": "int __user *mnt_id",
				"def": null
			},
			{
				"type": "int flag",
				"def": null
			}
		]
	},
	"304": {
		"name": "sys_open_by_handle_at",
		"signature": "(int mountdirfd, struct file_handle __user *handle, int flags)",
		"file": "fs/fhandle.c",
		"lineNumber": 256,
		"nr_hex": "0x130",
		"types": [
			{
				"type": "int mountdirfd",
				"def": null
			},
			{
				"type": "struct file_handle __user *handle",
				"def": {
					"line": 932,
					"file": "include/linux/fs.h"
				}
			},
			{
				"type": "int flags",
				"def": null
			}
		]
	},
	"305": {
		"name": "sys_clock_adjtime",
		"signature": "(clockid_t which_clock, struct timex __user *tx)",
		"file": "kernel/time/posix-timers.c",
		"lineNumber": 1071,
		"nr_hex": "0x131",
		"types": [
			{
				"type": "clockid_t which_clock",
				"def": null
			},
			{
				"type": "struct timex __user *tx",
				"def": {
					"line": 64,
					"file": "include/uapi/linux/timex.h"
				}
			}
		]
	},
	"306": {
		"name": "sys_syncfs",
		"signature": "(int fd)",
		"file": "fs/sync.c",
		"lineNumber": 160,
		"nr_hex": "0x132",
		"types": [
			{
				"type": "int fd",
				"def": null
			}
		]
	},
	"307": {
		"name": "sys_sendmmsg",
		"signature": "(int fd, struct mmsghdr __user *msg, unsigned int vlen, unsigned flags)",
		"file": "net/socket.c",
		"lineNumber": 2236,
		"nr_hex": "0x133",
		"types": [
			{
				"type": "int fd",
				"def": null
			},
			{
				"type": "struct mmsghdr __user *msg",
				"def": {
					"line": 69,
					"file": "include/linux/socket.h"
				}
			},
			{
				"type": "unsigned int vlen",
				"def": null
			},
			{
				"type": "unsigned flags",
				"def": null
			}
		]
	},
	"308": {
		"name": "sys_setns",
		"signature": "(int fd, int nstype)",
		"file": "kernel/nsproxy.c",
		"lineNumber": 237,
		"nr_hex": "0x134",
		"types": [
			{
				"type": "int fd",
				"def": null
			},
			{
				"type": "int nstype",
				"def": null
			}
		]
	},
	"309": {
		"name": "sys_getcpu",
		"signature": "(unsigned __user *cpu, unsigned __user *node, struct getcpu_cache __user *cache)",
		"file": "kernel/sys.c",
		"lineNumber": 2486,
		"nr_hex": "0x135",
		"types": [
			{
				"type": "unsigned __user *cpu",
				"def": null
			},
			{
				"type": "unsigned __user *node",
				"def": null
			},
			{
				"type": "struct getcpu_cache __user *cache",
				"def": {
					"line": 15,
					"file": "include/linux/getcpu.h"
				}
			}
		]
	},
	"310": {
		"name": "sys_process_vm_readv",
		"signature": "(pid_t pid, const struct iovec __user *lvec, unsigned long liovcnt, const struct iovec __user *rvec, unsigned long riovcnt, unsigned long flags)",
		"file": "mm/process_vm_access.c",
		"lineNumber": 298,
		"nr_hex": "0x136",
		"types": [
			{
				"type": "pid_t pid",
				"def": null
			},
			{
				"type": "const struct iovec __user *lvec",
				"def": null
			},
			{
				"type": "unsigned long liovcnt",
				"def": null
			},
			{
				"type": "const struct iovec __user *rvec",
				"def": null
			},
			{
				"type": "unsigned long riovcnt",
				"def": null
			},
			{
				"type": "unsigned long flags",
				"def": null
			}
		]
	},
	"311": {
		"name": "sys_process_vm_writev",
		"signature": "(pid_t pid, const struct iovec __user *lvec, unsigned long liovcnt, const struct iovec __user *rvec, unsigned long riovcnt, unsigned long flags)",
		"file": "mm/process_vm_access.c",
		"lineNumber": 305,
		"nr_hex": "0x137",
		"types": [
			{
				"type": "pid_t pid",
				"def": null
			},
			{
				"type": "const struct iovec __user *lvec",
				"def": null
			},
			{
				"type": "unsigned long liovcnt",
				"def": null
			},
			{
				"type": "const struct iovec __user *rvec",
				"def": null
			},
			{
				"type": "unsigned long riovcnt",
				"def": null
			},
			{
				"type": "unsigned long flags",
				"def": null
			}
		]
	},
	"312": {
		"name": "sys_kcmp",
		"signature": "(pid_t pid1, pid_t pid2, int type, unsigned long idx1, unsigned long idx2)",
		"file": "kernel/kcmp.c",
		"lineNumber": 152,
		"nr_hex": "0x138",
		"types": [
			{
				"type": "pid_t pid1",
				"def": null
			},
			{
				"type": "pid_t pid2",
				"def": null
			},
			{
				"type": "int type",
				"def": null
			},
			{
				"type": "unsigned long idx1",
				"def": null
			},
			{
				"type": "unsigned long idx2",
				"def": null
			}
		]
	},
	"313": {
		"name": "sys_finit_module",
		"signature": "(int fd, const char __user *uargs, int flags)",
		"file": "kernel/module.c",
		"lineNumber": 3862,
		"nr_hex": "0x139",
		"types": [
			{
				"type": "int fd",
				"def": null
			},
			{
				"type": "const char __user *uargs",
				"def": null
			},
			{
				"type": "int flags",
				"def": null
			}
		]
	},
	"314": {
		"name": "sys_sched_setattr",
		"signature": "(pid_t pid, struct sched_attr __user *attr, unsigned int flags)",
		"file": "kernel/sched/core.c",
		"lineNumber": 4551,
		"nr_hex": "0x13a",
		"types": [
			{
				"type": "pid_t pid",
				"def": null
			},
			{
				"type": "struct sched_attr __user *attr",
				"def": null
			},
			{
				"type": "unsigned int flags",
				"def": null
			}
		]
	},
	"315": {
		"name": "sys_sched_getattr",
		"signature": "(pid_t pid, struct sched_attr __user *attr, unsigned int size, unsigned int flags)",
		"file": "kernel/sched/core.c",
		"lineNumber": 4692,
		"nr_hex": "0x13b",
		"types": [
			{
				"type": "pid_t pid",
				"def": null
			},
			{
				"type": "struct sched_attr __user *attr",
				"def": null
			},
			{
				"type": "unsigned int size",
				"def": null
			},
			{
				"type": "unsigned int flags",
				"def": null
			}
		]
	},
	"316": {
		"name": "sys_renameat2",
		"signature": "(int olddfd, const char __user *oldname, int newdfd, const char __user *newname, unsigned int flags)",
		"file": "fs/namei.c",
		"lineNumber": 4658,
		"nr_hex": "0x13c",
		"types": [
			{
				"type": "int olddfd",
				"def": null
			},
			{
				"type": "const char __user *oldname",
				"def": null
			},
			{
				"type": "int newdfd",
				"def": null
			},
			{
				"type": "const char __user *newname",
				"def": null
			},
			{
				"type": "unsigned int flags",
				"def": null
			}
		]
	},
	"317": {
		"name": "sys_seccomp",
		"signature": "(unsigned int op, unsigned int flags, const char __user *uargs)",
		"file": "kernel/seccomp.c",
		"lineNumber": 946,
		"nr_hex": "0x13d",
		"types": [
			{
				"type": "unsigned int op",
				"def": null
			},
			{
				"type": "unsigned int flags",
				"def": null
			},
			{
				"type": "const char __user *uargs",
				"def": null
			}
		]
	},
	"318": {
		"name": "sys_getrandom",
		"signature": "(char __user *buf, size_t count, unsigned int flags)",
		"file": "drivers/char/random.c",
		"lineNumber": 2041,
		"nr_hex": "0x13e",
		"types": [
			{
				"type": "char __user *buf",
				"def": null
			},
			{
				"type": "size_t count",
				"def": null
			},
			{
				"type": "unsigned int flags",
				"def": null
			}
		]
	},
	"319": {
		"name": "sys_memfd_create",
		"signature": "(const char __user *uname_ptr, unsigned int flags)",
		"file": "mm/memfd.c",
		"lineNumber": 266,
		"nr_hex": "0x13f",
		"types": [
			{
				"type": "const char __user *uname_ptr",
				"def": null
			},
			{
				"type": "unsigned int flags",
				"def": null
			}
		]
	},
	"320": {
		"name": "sys_kexec_file_load",
		"signature": "(int kernel_fd, int initrd_fd, unsigned long cmdline_len, const char __user *cmdline_ptr, unsigned long flags)",
		"file": "kernel/kexec_file.c",
		"lineNumber": 320,
		"nr_hex": "0x140",
		"types": [
			{
				"type": "int kernel_fd",
				"def": null
			},
			{
				"type": "int initrd_fd",
				"def": null
			},
			{
				"type": "unsigned long cmdline_len",
				"def": null
			},
			{
				"type": "const char __user *cmdline_ptr",
				"def": null
			},
			{
				"type": "unsigned long flags",
				"def": null
			}
		]
	},
	"321": {
		"name": "sys_bpf",
		"signature": "(int cmd, union bpf_attr *attr, unsigned int size)",
		"file": "kernel/bpf/syscall.c",
		"lineNumber": 2359,
		"nr_hex": "0x141",
		"types": [
			{
				"type": "int cmd",
				"def": null
			},
			{
				"type": "union bpf_attr *attr",
				"def": null
			},
			{
				"type": "unsigned int size",
				"def": null
			}
		]
	},
	"322": {},
	"323": {
		"name": "sys_userfaultfd",
		"signature": "(int flags)",
		"file": "fs/userfaultfd.c",
		"lineNumber": 1929,
		"nr_hex": "0x143",
		"types": [
			{
				"type": "int flags",
				"def": null
			}
		]
	},
	"324": {
		"name": "sys_membarrier",
		"signature": "(int cmd, int flags)",
		"file": "kernel/sched/membarrier.c",
		"lineNumber": 283,
		"nr_hex": "0x144",
		"types": [
			{
				"type": "int cmd",
				"def": null
			},
			{
				"type": "int flags",
				"def": null
			}
		]
	},
	"325": {
		"name": "sys_mlock2",
		"signature": "(unsigned long start, size_t len, int flags)",
		"file": "mm/mlock.c",
		"lineNumber": 721,
		"nr_hex": "0x145",
		"types": [
			{
				"type": "unsigned long start",
				"def": null
			},
			{
				"type": "size_t len",
				"def": null
			},
			{
				"type": "int flags",
				"def": null
			}
		]
	},
	"326": {
		"name": "sys_copy_file_range",
		"signature": "(int fd_in, loff_t __user *off_in, int fd_out, loff_t __user *off_out, size_t len, unsigned int flags)",
		"file": "fs/read_write.c",
		"lineNumber": 1634,
		"nr_hex": "0x146",
		"types": [
			{
				"type": "int fd_in",
				"def": null
			},
			{
				"type": "loff_t __user *off_in",
				"def": null
			},
			{
				"type": "int fd_out",
				"def": null
			},
			{
				"type": "loff_t __user *off_out",
				"def": null
			},
			{
				"type": "size_t len",
				"def": null
			},
			{
				"type": "unsigned int flags",
				"def": null
			}
		]
	},
	"327": {
		"name": "sys_preadv2",
		"signature": "(unsigned long fd, const struct iovec __user *vec, unsigned long vlen, unsigned long pos_l, unsigned long pos_h, rwf_t flags)",
		"file": "fs/read_write.c",
		"lineNumber": 1124,
		"nr_hex": "0x147",
		"types": [
			{
				"type": "unsigned long fd",
				"def": null
			},
			{
				"type": "const struct iovec __user *vec",
				"def": null
			},
			{
				"type": "unsigned long vlen",
				"def": null
			},
			{
				"type": "unsigned long pos_l",
				"def": null
			},
			{
				"type": "unsigned long pos_h",
				"def": null
			},
			{
				"type": "rwf_t flags",
				"def": null
			}
		]
	},
	"328": {
		"name": "sys_pwritev2",
		"signature": "(unsigned long fd, const struct iovec __user *vec, unsigned long vlen, unsigned long pos_l, unsigned long pos_h, rwf_t flags)",
		"file": "fs/read_write.c",
		"lineNumber": 1144,
		"nr_hex": "0x148",
		"types": [
			{
				"type": "unsigned long fd",
				"def": null
			},
			{
				"type": "const struct iovec __user *vec",
				"def": null
			},
			{
				"type": "unsigned long vlen",
				"def": null
			},
			{
				"type": "unsigned long pos_l",
				"def": null
			},
			{
				"type": "unsigned long pos_h",
				"def": null
			},
			{
				"type": "rwf_t flags",
				"def": null
			}
		]
	},
	"329": {
		"name": "sys_pkey_mprotect",
		"signature": "(unsigned long start, size_t len, unsigned long prot, int pkey)",
		"file": "mm/mprotect.c",
		"lineNumber": 585,
		"nr_hex": "0x149",
		"types": [
			{
				"type": "unsigned long start",
				"def": null
			},
			{
				"type": "size_t len",
				"def": null
			},
			{
				"type": "unsigned long prot",
				"def": null
			},
			{
				"type": "int pkey",
				"def": null
			}
		]
	},
	"330": {
		"name": "sys_pkey_alloc",
		"signature": "(unsigned long flags, unsigned long init_val)",
		"file": "mm/mprotect.c",
		"lineNumber": 591,
		"nr_hex": "0x14a",
		"types": [
			{
				"type": "unsigned long flags",
				"def": null
			},
			{
				"type": "unsigned long init_val",
				"def": null
			}
		]
	},
	"331": {
		"name": "sys_pkey_free",
		"signature": "(int pkey)",
		"file": "mm/mprotect.c",
		"lineNumber": 621,
		"nr_hex": "0x14b",
		"types": [
			{
				"type": "int pkey",
				"def": null
			}
		]
	},
	"332": {
		"name": "sys_statx",
		"signature": "(int dfd, const char __user *path, unsigned flags, unsigned mask, struct statx __user *buffer)",
		"file": "fs/stat.c",
		"lineNumber": 566,
		"nr_hex": "0x14c",
		"types": [
			{
				"type": "int dfd",
				"def": null
			},
			{
				"type": "const char __user *path",
				"def": null
			},
			{
				"type": "unsigned flags",
				"def": null
			},
			{
				"type": "unsigned mask",
				"def": null
			},
			{
				"type": "struct statx __user *buffer",
				"def": {
					"line": 99,
					"file": "include/uapi/linux/stat.h"
				}
			}
		]
	},
	"333": {
		"name": "sys_io_pgetevents",
		"signature": "(aio_context_t ctx_id, long min_nr, long nr, struct io_event __user *events, struct timespec __user *timeout, const struct __aio_sigset *sig)",
		"file": "fs/aio.c",
		"lineNumber": 2087,
		"nr_hex": "0x14d",
		"types": [
			{
				"type": "aio_context_t ctx_id",
				"def": null
			},
			{
				"type": "long min_nr",
				"def": null
			},
			{
				"type": "long nr",
				"def": null
			},
			{
				"type": "struct io_event __user *events",
				"def": {
					"line": 58,
					"file": "include/uapi/linux/aio_abi.h"
				}
			},
			{
				"type": "struct timespec __user *timeout",
				"def": null
			},
			{
				"type": "const struct __aio_sigset *sig",
				"def": {
					"line": 2082,
					"file": "fs/aio.c"
				}
			}
		]
	},
	"334": {
		"name": "sys_rseq",
		"signature": "(struct rseq __user *rseq, uint32_t rseq_len, int flags, uint32_t sig)",
		"file": "kernel/rseq.c",
		"lineNumber": 308,
		"nr_hex": "0x14e",
		"types": [
			{
				"type": "struct rseq __user *rseq",
				"def": null
			},
			{
				"type": "uint32_t rseq_len",
				"def": null
			},
			{
				"type": "int flags",
				"def": null
			},
			{
				"type": "uint32_t sig",
				"def": null
			}
		]
	},
	"335": {
		"name": "",
		"lineNumber": "",
		"file": "",
		"signature": "",
		"nr_hex": "0x14f",
		"types": []
	},
	"336": {
		"name": "sys_rt_sigaction",
		"signature": "(int, const struct sigaction __user *, struct sigaction __user *, size_t)",
		"file": "kernel/signal.c",
		"lineNumber": 3755,
		"nr_hex": "0x150",
		"types": [
			{
				"type": "int",
				"def": null
			},
			{
				"type": "const struct sigaction __user *",
				"def": {
					"line": 100,
					"file": "arch/alpha/include/uapi/asm/signal.h"
				}
			},
			{
				"type": "struct sigaction __user *",
				"def": {
					"line": 100,
					"file": "arch/alpha/include/uapi/asm/signal.h"
				}
			},
			{
				"type": "size_t",
				"def": null
			}
		]
	},
	"337": {
		"name": "",
		"lineNumber": "",
		"file": "",
		"signature": "",
		"nr_hex": "",
		"types": []
	},
	"338": {
		"name": "sys_ioctl",
		"signature": "(unsigned int fd, unsigned int cmd, unsigned long arg)",
		"file": "fs/ioctl.c",
		"lineNumber": 710,
		"nr_hex": "0x152",
		"types": [
			{
				"type": "unsigned int fd",
				"def": null
			},
			{
				"type": "unsigned int cmd",
				"def": null
			},
			{
				"type": "unsigned long arg",
				"def": null
			}
		]
	},
	"339": {
		"name": "sys_readv",
		"signature": "(unsigned long fd, const struct iovec __user *vec, unsigned long vlen)",
		"file": "fs/read_write.c",
		"lineNumber": 1104,
		"nr_hex": "0x153",
		"types": [
			{
				"type": "unsigned long fd",
				"def": null
			},
			{
				"type": "const struct iovec __user *vec",
				"def": null
			},
			{
				"type": "unsigned long vlen",
				"def": null
			}
		]
	},
	"340": {
		"name": "sys_writev",
		"signature": "(unsigned long fd, const struct iovec __user *vec, unsigned long vlen)",
		"file": "fs/read_write.c",
		"lineNumber": 1110,
		"nr_hex": "0x154",
		"types": [
			{
				"type": "unsigned long fd",
				"def": null
			},
			{
				"type": "const struct iovec __user *vec",
				"def": null
			},
			{
				"type": "unsigned long vlen",
				"def": null
			}
		]
	},
	"341": {
		"name": "sys_recvfrom",
		"signature": "(int, void __user *, size_t, unsigned, struct sockaddr __user *, int __user *)",
		"file": "net/socket.c",
		"lineNumber": 1858,
		"nr_hex": "0x155",
		"types": [
			{
				"type": "int",
				"def": null
			},
			{
				"type": "void __user *",
				"def": null
			},
			{
				"type": "size_t",
				"def": null
			},
			{
				"type": "unsigned",
				"def": null
			},
			{
				"type": "struct sockaddr __user *",
				"def": null
			},
			{
				"type": "int __user *",
				"def": null
			}
		]
	},
	"342": {
		"name": "sys_sendmsg",
		"signature": "(int fd, struct user_msghdr __user *msg, unsigned flags)",
		"file": "net/socket.c",
		"lineNumber": 2160,
		"nr_hex": "0x156",
		"types": [
			{
				"type": "int fd",
				"def": null
			},
			{
				"type": "struct user_msghdr __user *msg",
				"def": {
					"line": 58,
					"file": "include/linux/socket.h"
				}
			},
			{
				"type": "unsigned flags",
				"def": null
			}
		]
	},
	"343": {
		"name": "sys_recvmsg",
		"signature": "(int fd, struct user_msghdr __user *msg, unsigned flags)",
		"file": "net/socket.c",
		"lineNumber": 2333,
		"nr_hex": "0x157",
		"types": [
			{
				"type": "int fd",
				"def": null
			},
			{
				"type": "struct user_msghdr __user *msg",
				"def": {
					"line": 58,
					"file": "include/linux/socket.h"
				}
			},
			{
				"type": "unsigned flags",
				"def": null
			}
		]
	},
	"344": {},
	"345": {
		"name": "sys_ptrace",
		"signature": "(long request, long pid, unsigned long addr, unsigned long data)",
		"file": "kernel/ptrace.c",
		"lineNumber": 1121,
		"nr_hex": "0x159",
		"types": [
			{
				"type": "long request",
				"def": null
			},
			{
				"type": "long pid",
				"def": null
			},
			{
				"type": "unsigned long addr",
				"def": null
			},
			{
				"type": "unsigned long data",
				"def": null
			}
		]
	},
	"346": {
		"name": "sys_rt_sigpending",
		"signature": "(sigset_t __user *set, size_t sigsetsize)",
		"file": "kernel/signal.c",
		"lineNumber": 2879,
		"nr_hex": "0x15a",
		"types": [
			{
				"type": "sigset_t __user *set",
				"def": null
			},
			{
				"type": "size_t sigsetsize",
				"def": null
			}
		]
	},
	"347": {
		"name": "sys_rt_sigtimedwait",
		"signature": "(const sigset_t __user *uthese, siginfo_t __user *uinfo, const struct timespec __user *uts, size_t sigsetsize)",
		"file": "kernel/signal.c",
		"lineNumber": 3201,
		"nr_hex": "0x15b",
		"types": [
			{
				"type": "const sigset_t __user *uthese",
				"def": null
			},
			{
				"type": "siginfo_t __user *uinfo",
				"def": null
			},
			{
				"type": "const struct timespec __user *uts",
				"def": null
			},
			{
				"type": "size_t sigsetsize",
				"def": null
			}
		]
	},
	"348": {
		"name": "sys_rt_sigqueueinfo",
		"signature": "(pid_t pid, int sig, siginfo_t __user *uinfo)",
		"file": "kernel/signal.c",
		"lineNumber": 3383,
		"nr_hex": "0x15c",
		"types": [
			{
				"type": "pid_t pid",
				"def": null
			},
			{
				"type": "int sig",
				"def": null
			},
			{
				"type": "siginfo_t __user *uinfo",
				"def": null
			}
		]
	},
	"349": {
		"name": "sys_sigaltstack",
		"signature": "(const struct sigaltstack __user *uss, struct sigaltstack __user *uoss)",
		"file": "kernel/signal.c",
		"lineNumber": 3564,
		"nr_hex": "0x15d",
		"types": [
			{
				"type": "const struct sigaltstack __user *uss",
				"def": {
					"line": 114,
					"file": "arch/alpha/include/uapi/asm/signal.h"
				}
			},
			{
				"type": "struct sigaltstack __user *uoss",
				"def": {
					"line": 114,
					"file": "arch/alpha/include/uapi/asm/signal.h"
				}
			}
		]
	},
	"350": {
		"name": "sys_timer_create",
		"signature": "(clockid_t which_clock, struct sigevent __user *timer_event_spec, timer_t __user * created_timer_id)",
		"file": "kernel/time/posix-timers.c",
		"lineNumber": 572,
		"nr_hex": "0x15e",
		"types": [
			{
				"type": "clockid_t which_clock",
				"def": null
			},
			{
				"type": "struct sigevent __user *timer_event_spec",
				"def": {
					"line": 313,
					"file": "include/uapi/asm-generic/siginfo.h"
				}
			},
			{
				"type": "timer_t __user * created_timer_id",
				"def": null
			}
		]
	},
	"351": {
		"name": "sys_mq_notify",
		"signature": "(mqd_t mqdes, const struct sigevent __user *notification)",
		"file": "ipc/mqueue.c",
		"lineNumber": 1288,
		"nr_hex": "0x15f",
		"types": [
			{
				"type": "mqd_t mqdes",
				"def": null
			},
			{
				"type": "const struct sigevent __user *notification",
				"def": {
					"line": 313,
					"file": "include/uapi/asm-generic/siginfo.h"
				}
			}
		]
	},
	"352": {
		"name": "sys_kexec_load",
		"signature": "(unsigned long entry, unsigned long nr_segments, struct kexec_segment __user *segments, unsigned long flags)",
		"file": "kernel/kexec.c",
		"lineNumber": 226,
		"nr_hex": "0x160",
		"types": [
			{
				"type": "unsigned long entry",
				"def": null
			},
			{
				"type": "unsigned long nr_segments",
				"def": null
			},
			{
				"type": "struct kexec_segment __user *segments",
				"def": {
					"line": 73,
					"file": "include/linux/kexec.h"
				}
			},
			{
				"type": "unsigned long flags",
				"def": null
			}
		]
	},
	"353": {
		"name": "sys_waitid",
		"signature": "(int which, pid_t pid, struct siginfo __user *infop, int options, struct rusage __user *ru)",
		"file": "kernel/exit.c",
		"lineNumber": 1599,
		"nr_hex": "0x161",
		"types": [
			{
				"type": "int which",
				"def": null
			},
			{
				"type": "pid_t pid",
				"def": null
			},
			{
				"type": "struct siginfo __user *infop",
				"def": null
			},
			{
				"type": "int options",
				"def": null
			},
			{
				"type": "struct rusage __user *ru",
				"def": {
					"line": 24,
					"file": "include/uapi/linux/resource.h"
				}
			}
		]
	},
	"354": {
		"name": "sys_set_robust_list",
		"signature": "(struct robust_list_head __user *head, size_t len)",
		"file": "kernel/futex.c",
		"lineNumber": 3396,
		"nr_hex": "0x162",
		"types": [
			{
				"type": "struct robust_list_head __user *head",
				"def": {
					"line": 70,
					"file": "include/uapi/linux/futex.h"
				}
			},
			{
				"type": "size_t len",
				"def": null
			}
		]
	},
	"355": {
		"name": "sys_get_robust_list",
		"signature": "(int pid, struct robust_list_head __user * __user *head_ptr, size_t __user *len_ptr)",
		"file": "kernel/futex.c",
		"lineNumber": 3418,
		"nr_hex": "0x163",
		"types": [
			{
				"type": "int pid",
				"def": null
			},
			{
				"type": "struct robust_list_head __user * __user *head_ptr",
				"def": {
					"line": 70,
					"file": "include/uapi/linux/futex.h"
				}
			},
			{
				"type": "size_t __user *len_ptr",
				"def": null
			}
		]
	},
	"356": {
		"name": "sys_vmsplice",
		"signature": "(int fd, const struct iovec __user *iov, unsigned long nr_segs, unsigned int flags)",
		"file": "fs/splice.c",
		"lineNumber": 1343,
		"nr_hex": "0x164",
		"types": [
			{
				"type": "int fd",
				"def": null
			},
			{
				"type": "const struct iovec __user *iov",
				"def": null
			},
			{
				"type": "unsigned long nr_segs",
				"def": null
			},
			{
				"type": "unsigned int flags",
				"def": null
			}
		]
	},
	"357": {
		"name": "sys_move_pages",
		"signature": "(pid_t pid, unsigned long nr_pages, const void __user * __user *pages, const int __user *nodes, int __user *status, int flags)",
		"file": "mm/migrate.c",
		"lineNumber": 1808,
		"nr_hex": "0x165",
		"types": [
			{
				"type": "pid_t pid",
				"def": null
			},
			{
				"type": "unsigned long nr_pages",
				"def": null
			},
			{
				"type": "const void __user * __user *pages",
				"def": null
			},
			{
				"type": "const int __user *nodes",
				"def": null
			},
			{
				"type": "int __user *status",
				"def": null
			},
			{
				"type": "int flags",
				"def": null
			}
		]
	},
	"358": {},
	"359": {},
	"360": {
		"name": "sys_rt_tgsigqueueinfo",
		"signature": "(pid_t tgid, pid_t pid, int sig, siginfo_t __user *uinfo)",
		"file": "kernel/signal.c",
		"lineNumber": 3424,
		"nr_hex": "0x168",
		"types": [
			{
				"type": "pid_t tgid",
				"def": null
			},
			{
				"type": "pid_t pid",
				"def": null
			},
			{
				"type": "int sig",
				"def": null
			},
			{
				"type": "siginfo_t __user *uinfo",
				"def": null
			}
		]
	},
	"361": {
		"name": "sys_recvmmsg",
		"signature": "(int fd, struct mmsghdr __user *msg, unsigned int vlen, unsigned flags, struct timespec __user *timeout)",
		"file": "net/socket.c",
		"lineNumber": 2479,
		"nr_hex": "0x169",
		"types": [
			{
				"type": "int fd",
				"def": null
			},
			{
				"type": "struct mmsghdr __user *msg",
				"def": {
					"line": 69,
					"file": "include/linux/socket.h"
				}
			},
			{
				"type": "unsigned int vlen",
				"def": null
			},
			{
				"type": "unsigned flags",
				"def": null
			},
			{
				"type": "struct timespec __user *timeout",
				"def": null
			}
		]
	},
	"362": {
		"name": "sys_sendmmsg",
		"signature": "(int fd, struct mmsghdr __user *msg, unsigned int vlen, unsigned flags)",
		"file": "net/socket.c",
		"lineNumber": 2236,
		"nr_hex": "0x16a",
		"types": [
			{
				"type": "int fd",
				"def": null
			},
			{
				"type": "struct mmsghdr __user *msg",
				"def": {
					"line": 69,
					"file": "include/linux/socket.h"
				}
			},
			{
				"type": "unsigned int vlen",
				"def": null
			},
			{
				"type": "unsigned flags",
				"def": null
			}
		]
	},
	"363": {
		"name": "sys_process_vm_readv",
		"signature": "(pid_t pid, const struct iovec __user *lvec, unsigned long liovcnt, const struct iovec __user *rvec, unsigned long riovcnt, unsigned long flags)",
		"file": "mm/process_vm_access.c",
		"lineNumber": 298,
		"nr_hex": "0x16b",
		"types": [
			{
				"type": "pid_t pid",
				"def": null
			},
			{
				"type": "const struct iovec __user *lvec",
				"def": null
			},
			{
				"type": "unsigned long liovcnt",
				"def": null
			},
			{
				"type": "const struct iovec __user *rvec",
				"def": null
			},
			{
				"type": "unsigned long riovcnt",
				"def": null
			},
			{
				"type": "unsigned long flags",
				"def": null
			}
		]
	},
	"364": {
		"name": "sys_process_vm_writev",
		"signature": "(pid_t pid, const struct iovec __user *lvec, unsigned long liovcnt, const struct iovec __user *rvec, unsigned long riovcnt, unsigned long flags)",
		"file": "mm/process_vm_access.c",
		"lineNumber": 305,
		"nr_hex": "0x16c",
		"types": [
			{
				"type": "pid_t pid",
				"def": null
			},
			{
				"type": "const struct iovec __user *lvec",
				"def": null
			},
			{
				"type": "unsigned long liovcnt",
				"def": null
			},
			{
				"type": "const struct iovec __user *rvec",
				"def": null
			},
			{
				"type": "unsigned long riovcnt",
				"def": null
			},
			{
				"type": "unsigned long flags",
				"def": null
			}
		]
	},
	"365": {
		"name": "sys_setsockopt",
		"signature": "(int fd, int level, int optname, char __user *optval, int optlen)",
		"file": "net/socket.c",
		"lineNumber": 1909,
		"nr_hex": "0x16d",
		"types": [
			{
				"type": "int fd",
				"def": null
			},
			{
				"type": "int level",
				"def": null
			},
			{
				"type": "int optname",
				"def": null
			},
			{
				"type": "char __user *optval",
				"def": null
			},
			{
				"type": "int optlen",
				"def": null
			}
		]
	},
	"366": {
		"name": "sys_getsockopt",
		"signature": "(int fd, int level, int optname, char __user *optval, int __user *optlen)",
		"file": "net/socket.c",
		"lineNumber": 1946,
		"nr_hex": "0x16e",
		"types": [
			{
				"type": "int fd",
				"def": null
			},
			{
				"type": "int level",
				"def": null
			},
			{
				"type": "int optname",
				"def": null
			},
			{
				"type": "char __user *optval",
				"def": null
			},
			{
				"type": "int __user *optlen",
				"def": null
			}
		]
	},
	"367": {
		"name": "sys_io_setup",
		"signature": "(unsigned nr_reqs, aio_context_t __user *ctx)",
		"file": "fs/aio.c",
		"lineNumber": 1303,
		"nr_hex": "0x16f",
		"types": [
			{
				"type": "unsigned nr_reqs",
				"def": null
			},
			{
				"type": "aio_context_t __user *ctx",
				"def": null
			}
		]
	},
	"368": {
		"name": "sys_io_submit",
		"signature": "(aio_context_t, long, struct iocb __user * __user *)",
		"file": "fs/aio.c",
		"lineNumber": 1900,
		"nr_hex": "0x170",
		"types": [
			{
				"type": "aio_context_t",
				"def": null
			},
			{
				"type": "long",
				"def": null
			},
			{
				"type": "struct iocb __user * __user *",
				"def": null
			}
		]
	},
	"369": {},
	"370": {},
	"371": {}
}


function convertSyscallNrToName(syscallNr) {
  let syscall_number = parseInt(syscallNr);
  if (syscall_number > 600) {
    syscall_number -= 600;
  }

  if (syscall_number.toString() in syscallTable) {
    return syscallTable[syscall_number.toString()];
  }
  return { name: '???', signature: '???', file: "???", lineNumber: "???", nr_hex: "???", types: [] };
}

export default convertSyscallNrToName;
