from django.conf.urls import patterns, include, url
from django.contrib import admin

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'prec.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),
    url(r'^$',include('todo.urls')),
    url(r'^admin/', include(admin.site.urls)),
    url(r'^todo/',include('todo.urls')),
)
