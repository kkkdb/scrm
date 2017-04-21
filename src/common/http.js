import { deleteCookie } from './cookie'
import deepClone from '../common/deepClone'

export default (params) => {
    if (!params.url) {
        console.warn("请传入请求地址");
        return;
    }

    let shop_id = localStorage.getItem('shop_id');
    let url = params.url,
        type = (params.type == undefined) ? "get" : params.type,
        data = (params.data == undefined) ? {"shop_id": shop_id} : deepClone(params.data),
        hasLoading = (params.hasLoading == undefined || params.hasLoading == true || params.hasLoading == 'true') ? true : false,
        needShopId = params.needShopId == undefined ? true : params.needShopId,
        timeout = params.timeout || 20000;

    if (hasLoading) {
        var loading = layer.load(1);
    }

    if (shop_id&&!data.shop_id) {
        data['shop_id'] = shop_id;
    }

    if (!needShopId) {
        delete data.shop_id;
    }

    $.ajax({
        type: type,
        url: url,
        data: data,
        xhrFields: {
            withCredentials: true
        },
        success(res) {
            if (hasLoading) {
                layer.close(loading);
            }
            if (res.code == 0) {
                if (params.success) {
                    params.success(res);
                }
            } else {
                if (res.code == 40001) {
                    layer.msg('账号已过期，请重新登录', {
                        time: 1500
                    }, () => {
                        deleteCookie(() => {
                            window.location.reload();
                        });
                    })
                } else {
                    if (params.fail) {
                        params.fail(res);
                    } else {
                        layer.alert(res.msg, {
                            icon: 2
                        });
                    }
                }
            }
        },
        error(res) {
            if (hasLoading) {
                layer.close(loading);
            }

            layer.msg("网络太差，请稍后重试", {
                time: 1800
            }, () => {
                if (params.error) {
                    params.error();
                }
            });
        },
        timeout: timeout
    });
}
