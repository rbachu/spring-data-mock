package com.mmnaseri.utils.spring.data.store.impl;

import com.mmnaseri.utils.spring.data.domain.RepositoryMetadata;
import com.mmnaseri.utils.spring.data.store.DataStore;

/**
 * @author Mohammad Milad Naseri (m.m.naseri@gmail.com)
 * @since 1.0 (10/6/15)
 */
public class BeforeInsertDataStoreEvent extends AbstractEntityDataStoreEvent {

    public BeforeInsertDataStoreEvent(RepositoryMetadata repositoryMetadata, DataStore<?, ?> dataStore, Object entity) {
        super(repositoryMetadata, dataStore, entity);
    }

}